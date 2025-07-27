A simple rate limiter middleware for Express.js applications to limit requests per IP within a given time frame.

Installation : npm install ip-rate-limit

usage : -


const express = require('express');
const rateLimit = require('express-rate-limiter');
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  maxRequest: 100            // 100 requests per IP
});

app.use(limiter);

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

options: -

windowMs: Time window in milliseconds (e.g., 15 * 60 * 1000 for 15 minutes).

maxRequest: Max number of requests allowed per IP in the time window.