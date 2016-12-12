'use strict';

module.exports = sendResponse;

function sendResponse(response, object) {
  return res.status(200).json(object);
}

