const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// Define a custom middleware function for logging
const logMiddleware = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next(); // Continue to the next middleware or route handler
};

// Use the logging middleware for all routes
app.use(logMiddleware);

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express with Logging!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});