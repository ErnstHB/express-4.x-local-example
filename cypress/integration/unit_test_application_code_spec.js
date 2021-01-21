/// <reference types="cypress" />

// math exports a default object with methods
import math from '../pages/math'

describe('Unit Test Application Code', function () {
  const { add, divide, multiply, subtract, visitHomePage } = math

  before(() => {
    // check if the import worked correctly
    expect(add, 'add').to.be.a('function')
  })

  context('math.js', function () {
    it('can add numbers', function () {
      expect(add(1, 2)).to.eq(3)
    })

    it('can subtract numbers', function () {
      expect(subtract(5, 12)).to.eq(-7)
    })

    it('can divide numbers', function () {
      expect(divide(27, 9)).to.eq(3)
    })

    it('can muliple numbers', function () {
      expect(multiply(5, 4)).to.eq(20)
    })

    it('test home page', function () {
      expect(visitHomePage('http://localhost:3000'))
    })
  })
  
})
