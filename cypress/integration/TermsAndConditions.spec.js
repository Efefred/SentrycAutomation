/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

beforeEach('Test Execution', () => {
    cy.visit('/')
}) 

describe('Terms And Conditions', () => {

    it('Testing for Terms and Conditions', () => {
        cy.terms()
    })

    it('Testing for Terms and Conditions', () => {
        cy.conditions()
    })    

})