var $ = require('jquery');
global.jQuery = $; // Thanks for needing a global named "jQuery", Bootstrap.

var bootstrap = require('../../node_modules/bootstrap/dist/js/bootstrap.js');
var ko = require('knockout');

var m = {};

m.sum = function sum(x, y) {
  return x + y;
};

m.viewModel = function viewModel() {
  this.kobound = ko.observable('Foo!!!');
};

ko.applyBindings(m.viewModel);

module.exports = m;
