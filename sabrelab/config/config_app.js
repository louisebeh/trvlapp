'use strict';
var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    compression = require('compression'),
    errorhandler = require('errorhandler'),
    multer  = require('multer');

module.exports = function(app) {
  app.use(compression());
  app.use(morgan('dev'));
  app.use(bodyParser());
  app.use(multer());
  app.use(cookieParser('sabreSessions'));

  app.use(methodOverride());
