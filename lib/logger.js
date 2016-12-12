'use strict';

var winston = require('winston');
var logLevel = process.env.LOG_LEVEL || 'debug';

var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({
        colorize: true,
        timestamp: true,
        level: logLevel })
    ]
});

module.exports = logger;
