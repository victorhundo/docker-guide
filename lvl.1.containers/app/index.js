#!/bin/env node
var express = require('express');
var fs      = require('fs');
var path = require('path');

var main = express();

main.get('/', function (req, res) {
  res.sendfile('./index.html');
});

module.exports = main;
