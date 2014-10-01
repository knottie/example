var chai = require('chai');
var _ = require('lodash');
var sinonChai = require("sinon-chai");

chai.use(sinonChai);

chai.use(function(chai, utils) {
  var Assertion = chai.Assertion,
      missing = [],
      unexpected = [];

  Assertion.addMethod('set', function(expected) {
    var match = true,
        actual = this._obj,
        falsePositive = 'expected no missing or unexpected entries',
        falseNegative = 'expected missing or unexpected entries',
        message = '';

    missing = _.difference(actual, expected);
    if (missing.length > 0) {
      match = false;
    }

    unexpected = _.difference(expected, actual);
    if (unexpected.length > 0) {
      match = false;
    }

    this.assert(
      match,
      falsePositive,
      falseNegative,
      JSON.stringify(expected, null, 2),
      JSON.stringify(actual, null, 2)
    );
  });
});
