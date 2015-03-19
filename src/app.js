var path = require('path');
var express = require('express');
var compression = require('compression');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');

var router = require('./router.js');

var port = process.env.PORT || process.env.NODE_PORT || 3000;

var app = express();

app.use(compression());

app.use('/assets', express.static(path.resolve(__dirname + '../../client/')));














