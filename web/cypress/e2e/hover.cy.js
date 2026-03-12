describe('hover', () => {
    it('hover on instagram link', () => {
        cy.openPage()
        cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.contains('Isso é Mouseover!').should('not.exist')
        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover!').should('be.visible')
    })
})