var winston = require('winston');

var logger = new(winston.Logger)({
  transports: [
    new(winston.transports.Console)(),
    new(winston.transports.File)({
      filename: process.env.LOGGING_PATH
    })
  ]
});
logger.level = process.env.LOGGING_LEVEL;
module.exports = logger;
