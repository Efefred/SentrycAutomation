/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

before('Test Execution', () => {
    cy.visit('/')
}) 

describe('Forgot Password', () => {

    it('Testing for Forgot Password Link', () => {
        cy.forgotPasswordLink() 
    })

    it('Testing for Email Field on Forgot Password Page',  () => {
        cy.emailFieldForgotPassword() 
    })

})