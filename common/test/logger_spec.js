'use strict';

var _ = require('lodash');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var bunyan = require('bunyan');
var common = require('../src/index');
var configureChai = require('./configureChai');

chai.use(sinonChai);

var logConfig;
var lambda;
var results;
var log;

describe('common#logger', function () {
  beforeEach(function () {
    logConfig = undefined;
    lambda = undefined;
    results = undefined;
  });

  it('is an object', function () {
    expect(_.isPlainObject(common.logger)).to.equal(true);
  });
  it('defines #createLogger as function', function () {
    expect(common.logger.createLogger).to.be.a('function');
  });
  it('defines #log as object', function () {
    expect(_.isPlainObject(common.logger.log)).to.equal(true);
  });

  describe('Creating a logger with name test', function () {
    beforeEach(function () {
      logConfig = {
        name: 'test'
      };
      sinon.stub(bunyan, 'createLogger');
    });
    afterEach(function () {
      bunyan.createLogger.restore();
    })
    describe('when #createLogger is called', function () {
      beforeEach(function () {
        common.logger.createLogger(logConfig);
      })
      it('calls bunyan to create a logger with parameters', function () {
        expect(bunyan.createLogger).to.have.been.calledWith({
          name: 'test'
        });
      });
    });
  });

  describe('Getting common serializers', function () {
    describe('when #serializers is called', function () {
      beforeEach(function () {
        results = common.logger.serializers();
      });
      it('returns an object with serializers', function () {
        expect(results).to.have.keys(['err', 'req', 'res']);
      })
    })
  })

  describe('Given a created logger', function () {
    beforeEach(function () {
      common.logger.createLogger({
        name: 'test'
      });
    });

    it('defines logger.bunyanLog', function(){
      expect(common.logger.bunyanLog).to.not.be.undefined;
    })

    describe('common.logger.log#fatal', function () {
      it('is a function', function () {
        expect(common.logger.log.fatal).to.be.a('function');
      });
      describe('when called with a message', function () {
        beforeEach(function () {
          sinon.stub(common.logger.bunyanLog, 'fatal');
          common.logger.log.fatal('message');
        });
        afterEach(function () {
          common.logger.bunyanLog.fatal.restore();
        });
        it('uses bunyan#fatal', function () {
          expect(common.logger.bunyanLog.fatal).to.have.been.calledWith('message');
        });
      });
    });
  });

});
