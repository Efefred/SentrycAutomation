/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

before('Navigate to Login Page', () => {
    cy.visit('/')
})   

describe('Sentryc Test Suite', () => { 

    it('Testing Login with a valid email and a valid password',  () => {
        cy.validEmailValidPassword()
    })   
    
    it('Testing Login with an invalid email and valid password',  () => {
        cy.invalidEmailValidPassword() 
    }) 

})