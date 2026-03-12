describe('TCs related to links', ()=>{
    it('Validate Insta link', ()=>{
        cy.openPage()
        cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.contains('a','@qapapito')
        .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
    })

        it('Validate Termos de uso link', ()=>{
        cy.openPage()
        cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
        cy.contains('a','termos de uso')
            .invoke('removeAttr', 'target')
            .click()
        cy.url()
            .should('eq', 'http://localhost:3000/terms');
        cy.contains('h1', 'Termos de Uso')
            .should('be.visible')
        
    })
})