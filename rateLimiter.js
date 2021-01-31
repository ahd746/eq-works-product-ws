class TokenBucket {
  constructor(capacity, fillPerSecond) {
    this.capacity = capacity;
    this.fillPerSecond = fillPerSecond;

    this.lastFilled = Math.floor(Date.now() / 1000);
    this.tokens = capacity;
  }

  take() {
    this.refill();

    if (this.tokens > 0) {
      this.tokens -= 1;
      return true;
    }

    return false;
  }

  refill() {
    const now = Math.floor(Date.now() / 1000);
    const rate = (now - this.lastFilled) / this.fillPerSecond;

    this.tokens = Math.min(
      this.capacity,
      this.tokens + Math.floor(rate * this.capacity)
    );
    this.lastFilled = now;
  }
}

function limitRequests(perSecond, maxBurst) {
  const buckets = new Map();

  return function limitRequestsMiddleware(req, res, next) {
    if (!buckets.has(req.ip)) {
      buckets.set(req.ip, new TokenBucket(maxBurst, perSecond));
    }

    const bucketForIP = buckets.get(req.ip);
    if (bucketForIP.take()) {
      next();
    } else {
      res.status(429).send("Too Many Requests");
    }
  };
}

module.exports = limitRequests;
