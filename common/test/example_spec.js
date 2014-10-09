'use strict';

var idx = require('../src/index');
var expect = require('chai').expect;
var configureChai = require('./configureChai');

describe('Hello', function() {

  it('is defined', function() {
    expect(idx).to.not.be.undefined;
  });

  describe('#sayHello', function() {

    it('should return "Hello, Bill"', function(){
      expect(idx.sayHello('Bill')).to.equal('Hello, Bill');
    });

    it('should return "Hello, Ted"', function(){
      expect(idx.sayHello('Ted')).to.equal('Hello, Ted');
    });

    it.skip('should return "Hello, Nancy"', function(){
      expect(idx.sayHello('Nancy')).to.equal('Hello, Nancy');
    });

  });

});
