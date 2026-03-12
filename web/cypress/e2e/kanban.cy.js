describe('kanban board', ()=>{
    it('Drag and Drop of one task', ()=>{
        cy.openPage()
        cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.goTo('Kanban', 'Kanban Board')

        const dataTransfer = new DataTransfer
        cy.contains('div[draggable="true"]','Documentar API')
            .trigger('dragstart', {dataTransfer})

        cy.get('.column-done')
            .trigger('drop', {dataTransfer})
            .contains('div[draggable="true"]','Documentar API')
            .should('be.visible')
    })
})