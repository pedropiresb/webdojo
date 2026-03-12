describe('play videos', ()=>{
    it ('playing one video', ()=>{
        cy.openPage()
        cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.goTo('Video', 'Video')
        cy.get('iframe[title="Video Player"]')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .as('iFramePlayer')

        cy.get('@iFramePlayer')
            .find('.play-button')
            .click()

        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible')
            .click()
    })
})