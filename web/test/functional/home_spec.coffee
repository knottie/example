index = require('../../src/javascript/index')

describe 'contact page', () ->

  it 'should return 4', () ->
    expect(index.sum(2, 2)).to.equal(4)

  it 'should not return 4', () ->
    expect(index.sum(2, 3)).to.not.equal(4)

  it 'should refuse partial submissions'

  it 'should keep values on partial submissions'

  it 'should refuse invalid emails'

  it 'should accept complete submissions'
