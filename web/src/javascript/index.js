var $ = require('jquery');
global.jQuery = $; // Thanks for needing a global named "jQuery", Bootstrap.

var bootstrap = require('../../node_modules/bootstrap/dist/js/bootstrap.js');

m = {};

m.sum = function sum(x, y) {
  return x + y;
};

module.exports = m;
