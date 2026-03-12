// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//http://localhost:3000
//papito@email.com
//katana123

import 'cypress-real-events'
import './actions/consultancy.actions'
import { getActualDate } from './utils'


Cypress.Commands.add('openPage', ()=>{
    //cy.viewport(1440,900)
    cy.visit('/')
})

Cypress.Commands.add('submitLogin', (email,senha)=>{
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.contains('button','Entrar').click()
})

Cypress.Commands.add('goTo', (formName,title)=>{
    cy.contains('button',formName).click()
    cy.contains('div',title).should('be.visible')
    
})



Cypress.Commands.add('login', ()=>{
   // cy.contains('button',formName).click()
    //cy.contains('div',title).should('be.visible')
    const token = 'e1033d63a53fe66c0fd3451c7fd8f617'
    const loginDate = getActualDate( )

    cy.setCookie('login_date', loginDate)
cy.visit('/dashboard', {
    onBeforeLoad(win){
        win.localStorage.setItem('token', token)
    }
})

})
