'use strict';

var _ = require('lodash');
var bunyan = require('bunyan');

var m = {};

m.bunyanLog = undefined;

// Pass bunyan's createLogger
m.createLogger = function (params) {
  m.bunyanLog = bunyan.createLogger(params);
};

m.serializers = function () {
  return _.merge({}, bunyan.stdSerializers);
}

// Log methods
m.log = {};
var log = m.log;

log.fatal = function fatal(params) {
  if(m.bunyanLog) {
    m.bunyanLog.fatal(params);
  }
};

module.exports = m;
