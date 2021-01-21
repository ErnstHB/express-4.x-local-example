import * as home from './home.page'

export default {
  add: (a, b) => {
    return a + b
  },

  subtract: (a, b) => {
    return a - b
  },

  divide: (a, b) => {
    return a / b
  },

  multiply: (a, b) => {
    return a * b
  },

  visitHomePage: (address) => {
    cy.visit(address)
    //cy.visit('http://localhost:3000')
    cy.get(home.WELCOME_TEXT).should(`be.visible`)    
  }
}
