'use strict';

var os = require('os');

var m = module.exports = {};

m.sayHello = function sayHello(req, res, next) {
  res.send(200, {hello: 'Bill'});
  return next();
};

m.getArch = function getArch(req, res, next) {
  res.send(200, os.arch());
  return next();
};
