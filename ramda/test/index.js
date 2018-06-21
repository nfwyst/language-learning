import chai from 'chai'
import log from '../libs/log.js'

const { expect } = chai

describe('first test', function() {
  it('test true for true', function() {
    expect(true).to.be.true
  })
  it('test false for false', function() {
    expect(false).to.be.false
  })
})

describe('second test', function() {
  it('test number for number', function() {
    expect(4 * 10).equal(40)
  })
  it('test string for string', function() {
    expect('hello world').equal('hello world')
  })
})

describe('log group test', function() {
  it('out put should be undefined', function() {
    expect(log('data', {key: 'value'})).equal(undefined)
  })
})
