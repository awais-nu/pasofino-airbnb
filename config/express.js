'use strict';

var express = require('express');
var config = require('./config');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var async = require('async');
var morgan = require('morgan');
var mongoose = require('mongoose');
var mongodb= require('mongodb');

module.exports = function() {
  // Initialize express app
  var app = express();

  // app.use(morgan(process.env.MORGAN_LOGGING));

  app.use(express.static(path.resolve('./public')));
  // app.set('views', path.join(__dirname, '../public'));
  // app.engine('.html', require('ejs').renderFile);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.set('view engine', 'ejs');
  mongoose.connect('mongodb://localhost:27017/AirBNB');

  // mongoose.model('login',{username: String, password:String});

  //loadin model filters
  fs.readdirSync(__dirname+'/../app/models').forEach(function (filename) {
    if (~filename.indexOf('.js')) {
      require(__dirname+'/../app/models/'+filename);
    }
  });
  // config.getGlobbedFiles('./app/models/**/*.js').forEach(function(filename) {
  //   require(path.resolve(filename))(app);
  // });

  // Globbing routing files
  config.getGlobbedFiles('./app/routes/**/*.js').forEach(function(routePath) {
    require(path.resolve(routePath))(app);
  });

  // Return Express server instance
  return app;
};
