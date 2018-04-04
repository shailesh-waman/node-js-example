'use strict'

const User = require('./User')
const expect = require('chai').expect

describe('I am testing User class functions', () => {
  describe('"up"', () => {
    it('should export a function', () => {
      expect(User.up).to.be.a('function')
    })

    it('should return hello for up a function', () => {
      expect(User.up()).to.equal('hello')
    })
  })
})