var Dispatcher = require('')
var $ = require('jquery');

global.jQuery = $; // Thanks for needing a global named "jQuery", Bootstrap.
var bootstrap = require('../../node_modules/bootstrap/dist/js/bootstrap.js');

var dispatcher = new Dispatcher();
