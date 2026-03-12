import { adress } from '../fixtures/cep.json'

describe('CEP', ()=>{
    beforeEach(()=>{
        //cy.openPage()
        //cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.login()
        cy.goTo('Integração', 'Consulta de CEP')
        
    })

    it('Validate CEP request', ()=>{
      /*  cy.intercept('GET', 'https://viacep.com.br/ws/52021030/json/', {
            statusCode:200
        } ).as('getCep')*/
        
        cy.get('input[id="cep"]')
        .type(adress.cep)

        cy.contains ('label','CEP')
        .parent()
        .find('button')
        .click()

       // cy.wait('@getCep')

        cy.get('#street').should('have.value', adress.street)
        cy.get('#neighborhood').should('have.value', adress.neighborhood)
        cy.get('#city').should('have.value', adress.city)
        cy.get('#state').should('have.value', adress.state)
    })
})