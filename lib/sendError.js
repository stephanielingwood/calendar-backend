'use strict';

module.exports = sendError;

var errorMap = require('./errorMap.js');

function sendError(err, message) {
  return res.status(errorMap.err).json({message: message})
}
