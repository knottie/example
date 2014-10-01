'use strict';

var m = {};

m.sayHello = function sayHello(req, res, next) {
  res.send(200, {hello: 'Bill'});
  return next();
};

module.exports = m;
