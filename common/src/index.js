'use strict';

var m = module.exports = {};

m.logger = require('./logger');

// Insert your code here.

// This function is tested.
m.sayHello = function sayHello(name) {
  return 'Hello, ' + name;
};

// This function is not tested, but ignored by Istanbul.
/* istanbul ignore next */
m.ignored = function ignored(foo) {
  if (foo === true) {
    return true;
  } else {
    return false;
  }

  return false;
};

// This function is untested.
m.notCovered = function notCovered(foo) {
  if (foo === true) {
    return true;
  } else {
    return false;
  }

  return false;
};
