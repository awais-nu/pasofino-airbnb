'use strict';

require('dotenv').config();
var init = require('./config/init')();
var app = require('./config/express')();
var config = require('./config/config');
var logger = require('./app/logging/logger.js');
const chalk = require('chalk');

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
logger.info('info', 'AirBNB application started on port ' + config.port);
