/// <reference types="cypress" />

const { equal } = require("assert-plus")

describe('example domain test', () => {
  it('example domain test', () => {
    
    //1. Navigate to https://example.com
    cy.visit('https://www.example.com')
    
    //2. Verify the page title is "Example Domain".
    cy.title().should('equal', 'Example Domain')

    //3. Click on the "More information..." link.
    cy.contains('More information').click()

    //4. Verify the browser is redirected to the IANA website (https://www.iana.org/help/example-domains).
    cy.url().should('equal', 'http://www.iana.org/help/example-domains')

    //5. Navigate to https://www.iana.org/about
    cy.visit('https://www.iana.org/about')

    //6. Scroll down and navigate to the “TERMS OF SERVICE” page.
    cy.contains('Terms of Service').scrollIntoView()
    cy.contains('Terms of Service').click()

    //Verify successful redirection to 'Terms Of Service' page
    cy.title().should('equal', 'TERMS OF SERVICE - ICANN')
  })
})