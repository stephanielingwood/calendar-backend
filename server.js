'use strict'

module.exports = initApp;
var express = require('express');
var bodyparser = require('body-parser');

// create express app
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

// logging
global.logger = require('./lib/logger.js');

// add globals
global.async = require('async');
global._ = require('underscore');
// var glob = require('glob');
// var Sequelize = require('sequelize');

global.sendResponse = require('./lib/sendResponse.js');
global.sendError = require('./lib/sendError.js');
// TODO:
// error handling framework
// route requiring
// db setup

var port = process.env.PORT || 3000;

function initApp() {
  var store = {
    app: app,
    port: port
  };

  async.series([
      // initDB.bind(null, store),
      // initRoutes.bind(null, store)
    ], function (err) {
      if (err)
        logger.warn('Unable to start app');

      app.listen(store.port, function() {
        logger.info('listening to port ' + store.port);
      });
    }
  )
}

initApp();


