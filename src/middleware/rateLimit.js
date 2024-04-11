require('dotenv').config();
const setRateLimit = require('express-rate-limit');

// Rate limit to prevent many requests within a certain time period
const rateLimitMiddleware = setRateLimit({
  windowMs: 60 * 1000,
  max: process.env.MAX_REQUESTS || 5,
  standardHeaders: true,
});

module.exports = rateLimitMiddleware;