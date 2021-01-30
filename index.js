const express = require("express");
const pg = require("pg");
const cors = require("cors");
const app = express();
const limitRequests = require("./ipRateLimiter");
const path = require("path");

app.use(cors());
app.use(limitRequests(60, 10));
app.use(express.static("client/build"));

// configs come from standard PostgreSQL env vars
// https://www.postgresql.org/docs/9.6/static/libpq-envars.html
const pool = new pg.Pool();

const queryHandler = (req, res, next) => {
  pool
    .query(req.sqlQuery)
    .then((r) => {
      return res.json(r.rows || []);
    })
    .catch(next);
};

app.get("/", (req, res) => {
  res.send("Welcome to EQ Works 😎");
});

app.get(
  "/events/hourly",
  (req, res, next) => {
    req.sqlQuery = `
    SELECT date, hour, events
    FROM public.hourly_events
    ORDER BY date, hour
    LIMIT 168;
    `;
    return next();
  },
  queryHandler
);

app.get(
  "/events/daily",
  (req, res, next) => {
    req.sqlQuery = `
    SELECT date, SUM(events) AS events
    FROM public.hourly_events
    GROUP BY date
    ORDER BY date
    LIMIT 7;
    `;
    return next();
  },
  queryHandler
);

app.get(
  "/stats/hourly",
  (req, res, next) => {
    req.sqlQuery = `
      SELECT date, hour, impressions, clicks, revenue
      FROM public.hourly_stats
      ORDER BY date, hour
      LIMIT 168;
      `;
    return next();
  },
  queryHandler
);

app.get(
  "/stats/daily",
  (req, res, next) => {
    req.sqlQuery = `
        SELECT date,
        SUM(impressions) AS impressions,
        SUM(clicks) AS clicks,
        SUM(revenue) AS revenue
        FROM public.hourly_stats
        GROUP BY date
        ORDER BY date
        LIMIT 7;
        `;
    return next();
  },
  queryHandler
);

app.get(
  "/poi",
  (req, res, next) => {
    req.sqlQuery = `
          SELECT *
          FROM public.poi;
          `;
    return next();
  },
  queryHandler
);

app.listen(process.env.PORT || 5555, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log(`Running on ${process.env.PORT || 5555}`);
  }
});

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

// last resorts
process.on("uncaughtException", (err) => {
  console.log(`Caught exception: ${err}`);
  process.exit(1);
});
process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
  process.exit(1);
});
