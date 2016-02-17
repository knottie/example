idx           = require('../src/index.coffee')

describe 'Hello', () ->

  it 'is defined', () ->
    expect(idx).to.not.be.undefined

  describe '#sayHello', () ->

    it 'should return "Hello, Bill"', () ->
      expect(idx.sayHello('Bill')).to.equal('Hello, Bill')

    it 'should return "Hello, Ted"', () ->
      expect(idx.sayHello('Ted')).to.equal('Hello, Ted')

    it.skip 'should return "Hello, Nancy"', () ->
      expect(idx.sayHello('Nancy')).to.equal('Hello, Nancy')
