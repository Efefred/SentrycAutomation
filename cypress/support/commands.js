import user from '../fixtures/TestData.json'

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

//@Testing With Valid Email and Valid Password
Cypress.Commands.add('validEmailValidPassword', () => {  
    cy.get(':nth-child(1) > .base-borders').type(user.email_valid)
    cy.get(':nth-child(2) > .base-borders').type(user.password_valid)
    cy.get('form > .jss1').should('have.text', 'Login').click()
})

//@Testing With Invalid Email and Valid Password
Cypress.Commands.add('invalidEmailValidPassword', () => {  
    cy.get(':nth-child(1) > .base-borders').type(user.email_invalid)
    cy.get(':nth-child(2) > .base-borders').type(user.password_valid)
    // cy.get(':nth-child(1) > .jss38 > .jss40 > .jss41 > .input-errors > li').should('have.text', user.error_email_invalid)
    cy.get(':nth-child(1) > .jss38 > .jss40 > .jss41 > .input-errors > li').should('be.visible')
})

//@Testing for Forgot Password Link
Cypress.Commands.add('forgotPasswordLink', () => {
    cy.get(':nth-child(4) > .base-text')
      .contains('Forgot password?').click()
})
   
//@Testing for Email Field on Forgot Password
Cypress.Commands.add('emailFieldForgotPassword', () => {
    cy.get(':nth-child(1) > .base-borders').should('be.visible')
})    

//@Testing for Terms 
Cypress.Commands.add('terms', () => {
    cy.get('[href="/terms"]').click()
    cy.url().should('include', '/login.sentryc.com/terms') 
})      

//@Testing for Conditions
Cypress.Commands.add('conditions', () => {
    cy.get('[href="/conditions"]').click()
    cy.url().should('include', '/login.sentryc.com/conditions')
}) 