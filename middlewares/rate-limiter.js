// middlewares/rateLimiter.js
const rateLimit = require('express-rate-limit');

// Create rate limiting based on user_id
exports.taskLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute window
  max: 20, // Limit each user to 20 requests per minute
  keyGenerator: (req) => req.body.user_id || 'anonymous',
  handler: (req, res) => {
    res.status(429).json({ error: 'Too many requests, please try again later.' });
  },
});

exports.secondLimiter = rateLimit({
  windowMs: 1000, // 1 second window
  max: 1, // Limit each user to 1 request per second
  keyGenerator: (req) => req.body.user_id || 'anonymous',
  handler: (req, res) => {
    res.status(429).json({ error: 'Too many requests, please wait a second.' });
  },
});
