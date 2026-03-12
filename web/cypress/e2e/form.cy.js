import { personal, inCompany } from '../fixtures/consultancy.json'

describe('Wrong Form', () => {
    it('Empty Form', () => {
        //cy.openPage()
        //cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.login()
        cy.goTo('Formulários', 'Consultoria')
        cy.submitForm()
        cy.contains('div', 'Nome Completo *')
            .contains('p', 'Campo obrigatório').should('be.visible')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')
        cy.contains('div', 'Email *')
            .contains('p', 'Campo obrigatório').should('be.visible')
        cy.contains('p', 'Você precisa aceitar os termos de uso').should('be.visible')
    })
})



describe('Send form - Individual', () => {
    beforeEach(function () {
        cy.fixture('consultancy.json').as('consultancyData')
        cy.login()
    })
    it('Individual Form', function () {

       // cy.openPage()
        //cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
        cy.fillForm(personal)
        cy.submitForm()
        cy.validateSubmittion()

    })

    it('In Company Form', function () {

       //cy.openPage()
       // cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
        cy.fillForm(inCompany)
        cy.submitForm()
        cy.validateSubmittion()

    })

    it('Phone Mask', () => {
       // cy.openPage()
       // cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
        cy.get('input[id="phone"]').type('81334711013')
            .should('have.value', '(81) 33471-1013')
    })

    it('PJ Selection', () => {
       // cy.openPage()
       // cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
        cy.contains('label', 'Pessoa Jurídica')
            .find('input[type="radio"]')
            .click()
        cy.contains('label', 'CNPJ')
            .should('be.visible')
    })

    it('PJ Mask', () => {
       // cy.openPage()
       // cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
        cy.contains('label', 'Pessoa Jurídica')
            .find('input[type="radio"]')
            .click()
        cy.contains('div', 'CNPJ')
            .find('input')
            .type('12345678901234')
            .should('have.value', '12.345.678/9012-34')
    })

    it('PF Selection', () => {
       // cy.openPage()
       // cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
        cy.contains('label', 'Pessoa Jurídica')
            .find('input[type="radio"]')
            .click()
        cy.contains('label', 'Pessoa Física')
            .find('input[type="radio"]')
            .click()
        cy.contains('label', 'CPF')
            .should('be.visible')
    })

    it('PF Mask', () => {
       // cy.openPage()
       // cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
        cy.contains('label', 'Pessoa Física')
            .find('input[type="radio"]')
            .click()
        cy.contains('div', 'CPF')
            .find('input')
            .type('12345678901')
            .should('have.value', '123.456.789-01')
    })
})