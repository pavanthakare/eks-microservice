const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Microservice A!');
});

// Export app for testing or importing in server.js
module.exports = app;
