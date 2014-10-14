'use strict';

var expect = require('chai').expect;
var configureChai = require('../configureChai');
var index = require('../../src/javascript/index');

describe('contact page', function() {

  before(function() {

  });

  it('should return 4', function() {
    expect(index.sum(2, 2)).to.equal(4);
  });

  it('should not return 4', function() {
    expect(index.sum(2, 3)).to.not.equal(4);
  });

  it('should refuse partial submissions');

  it('should keep values on partial submissions');

  it('should refuse invalid emails');

  it('should accept complete submissions');

});
