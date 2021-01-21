import * as home from './home.page'

export default {
  // add: (a, b) => {
  //   return a + b
  // },

  visitHomePage: (address) => {
    cy.visit(address)
    //cy.visit('http://localhost:3000')
    cy.get(home.WELCOME_TEXT).should(`be.visible`)    
  },

  logIn: () => {
    cy.visit('/login')
    cy.get('[name=username]').type('jack')
    cy.get('[name=password]').type('secret')
    cy.get('[type=Submit]').click()
  
    cy.contains('a', 'profile').should('be.visible').click()
    cy.url().should('match', /profile$/)
    cy.contains('Email: jack@example.com')
  },

  ligInNoPassword: () => {
    const username = Cypress.env('username')
    const password = Cypress.env('password')

    // it is ok for the username to be visible in the Command Log
    expect(username, 'username was set').to.be.a('string').and.not.be.empty
    // but the password value should not be shown
    if (typeof password !== 'string' || !password) {
    throw new Error('Missing password value, set using CYPRESS_password=...')
    }

    cy.visit('/login')
    cy.get('[name=username]')
      .type(username)
      .should('have.value', username)
    cy.get('[name=password]')
      .type(password, {log: false})
      .should(el$ => {
          if(el$.val() !== password){
              throw new Error('Wrong password')
          }
      })

    cy.get('[type=Submit]').click()
  
    cy.contains('a', 'profile').should('be.visible').click()
    cy.url().should('match', /profile$/)
    cy.contains('Email: jack@example.com')
  }
  

}
