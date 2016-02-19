$ = require('jquery')
global.jQuery = $ # Thanks for needing a global named "jQuery", Bootstrap.

bootstrap = require('../../node_modules/bootstrap/dist/js/bootstrap.js')
ko        = require('knockout')

m = module.exports = {};

m.sum = (x, y) -> x + y

m.viewModel = () ->
  @.kobound = ko.observable('Foo!!!')
  undefined

ko.applyBindings(m.viewModel);
