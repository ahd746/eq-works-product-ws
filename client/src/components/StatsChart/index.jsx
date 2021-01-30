import { Bar, Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import moment from "moment";

const StatsChart = ({ stats, type }) => {
  const [date, setDate] = useState([]);
  const [impressions, setImpressions] = useState([]);
  const [clicks, setClicks] = useState([]);
  const [revenue, setRevenue] = useState([]);

  useEffect(() => {
    setDate(
      stats.map((stat) => moment(stat.date).add(1, "days").format("DD/MM/YYYY"))
    );
    setImpressions(stats.map((stat) => stat.impressions / 500));
    setClicks(stats.map((stat) => stat.clicks));
    setRevenue(stats.map((stat) => stat.revenue));
  }, [stats]);

  const data = {
    labels: date,
    datasets: [
      {
        label: "Impressions(x500)",
        data: impressions,
        backgroundColor: "",
        borderColor: "black",
        borderWidth: 5,
      },
      {
        label: "Clicks",
        data: clicks,
        backgroundColor: "",
        borderColor: "blue",
        borderWidth: 5,
      },
      {
        label: "Revenue",
        data: revenue,
        backgroundColor: "",
        borderColor: "green",
        borderWidth: 5,
      },
    ],
  };
  const options = {
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <>{type ? <Bar data={data} /> : <Line data={data} options={options} />}</>
  );
};

export default StatsChart;
