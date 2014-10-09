'use strict';

var expect = require('chai').expect;
var configureChai = require('./configureChai');

describe('Array', function() {

  it('is defined', function() {
    expect(Array).to.not.be.undefined;
  });

  describe('#indexOf', function() {

    it('should return -1 when the value is not present', function(){
      expect([1,2,3].indexOf(5)).to.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
    });

  });

});
