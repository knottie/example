'use strict';

var helloModel = require('../../src/models/hello');
var expect = require('chai').expect;
var configureChai = require('../configureChai');
var sinon = require('sinon');
var os = require('os');

var sandbox;
var req = {};
var res = {};
var next = {};

describe('Hello Model', function() {

  it('is defined', function() {
    expect(helloModel).to.not.be.undefined;
  });

  describe('#sayHello', function() {

    beforeEach(function() {
      sandbox = sinon.sandbox.create();
      res.send = sandbox.spy();
      next = sandbox.spy();
    });

    afterEach(function() {
      sandbox.restore();
    });

    it('should return http 200', function(){
      helloModel.sayHello(req, res, next);
      expect(res.send).to.have.been.calledWith(200);
    });

    it('should return next', function(){
      helloModel.sayHello(req, res, next);
      expect(next).to.have.been.calledOnce;
    });

    it.skip('should return "Hello, Ted"', function(){
      expect(helloModel.sayHello('Ted')).to.equal('Hello, Ted');
    });

    it.skip('should return "Hello, Nancy"', function(){
      expect(helloModel.sayHello('Nancy')).to.equal('Hello, Nancy');
    });

  });

  describe('#getArch', function() {

    beforeEach(function() {
      sandbox = sinon.sandbox.create();
      res.send = sandbox.spy();
      next = sandbox.spy();
      sandbox.stub(os, 'arch').returns('xFoo');
    });

    afterEach(function() {
      sandbox.restore();
    });

    it('should return http 200', function(){
      helloModel.getArch(req, res, next);
      expect(res.send).to.have.been.calledWith(200);
    });

    it('should return next', function(){
      helloModel.getArch(req, res, next);
      expect(next).to.have.been.calledOnce;
    });

    it('should get the system architecture', function(){
      helloModel.getArch(req, res, next);
      expect(os.arch).to.have.been.calledOnce;
      expect(res.send).to.have.been.calledWith(200, 'xFoo');
    });

  });

});
