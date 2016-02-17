helloModel = require('../../src/models/hello')
sinon      = require('sinon')
os         = require('os')

sandbox = false
req     = {}
res     = {}
next    = {}

describe 'Hello Model', () ->

  it 'is defined', () ->
    expect(helloModel).to.not.be.undefined

  describe '#sayHello', () ->

    beforeEach () ->
      sandbox  = sinon.sandbox.create()
      res.send = sandbox.spy()
      next     = sandbox.spy()

    afterEach () ->
      sandbox.restore()

    it 'should return http 200', () ->
      helloModel.sayHello(req, res, next)
      expect(res.send).to.have.been.calledWith(200)

    it 'should return next', () ->
      helloModel.sayHello(req, res, next)
      expect(next).to.have.been.calledOnce

    it.skip 'should return "Hello, Ted"', () ->
      expect(helloModel.sayHello('Ted')).to.equal('Hello, Ted')

    it.skip 'should return "Hello, Nancy"', () ->
      expect(helloModel.sayHello('Nancy')).to.equal('Hello, Nancy')

  describe '#getArch', () ->

    beforeEach () ->
      sandbox  = sinon.sandbox.create()
      res.send = sandbox.spy()
      next     = sandbox.spy()
      sandbox.stub(os, 'arch').returns('xFoo')

    afterEach () ->
      sandbox.restore()

    it 'should return http 200', () ->
      helloModel.getArch(req, res, next)
      expect(res.send).to.have.been.calledWith(200)

    it 'should return next', () ->
      helloModel.getArch(req, res, next)
      expect(next).to.have.been.calledOnce

    it 'should get the system architecture', () ->
      helloModel.getArch(req, res, next)
      expect(os.arch).to.have.been.calledOnce
      expect(res.send).to.have.been.calledWith(200, 'xFoo')
