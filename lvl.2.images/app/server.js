#!/bin/env node
var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.sendfile('./index.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
