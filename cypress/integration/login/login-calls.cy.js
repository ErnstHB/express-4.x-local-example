/// <reference types="cypress" />

// math exports a default object with methods
import login from '../../pages/login'

describe('Run all login tests', function () {
  const { visitHomePage, logIn, ligInNoPassword } = login

  before(() => {
    // check if the import worked correctly
    expect(logIn, 'logIn').to.be.a('function')
  })

  context('login.js', function () {
    // it('can add numbers', function () {
    //   expect(add(1, 2)).to.eq(3)
    // })

    it('test home page', function () {
      expect(visitHomePage('http://localhost:3000'))
    })

    it('logs in', function () {
      expect(logIn())
    })

    it('logs in using env variables', () => {
      expect(ligInNoPassword())
    })


  })
  
})
