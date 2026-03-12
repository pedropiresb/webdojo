describe('Validate JS Alerts', ()=>{
     beforeEach(()=>{
        cy.openPage()
        cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.goTo('Alertas JS', 'JavaScript Alerts')
    })

    it('Validate alert message', ()=>{
        cy.on('window:alert', (msg) =>{
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!')
        })
        cy.contains('button', 'Mostrar Alert')
        .click()
    })

    it('Validate confirmation dialog', ()=>{
        cy.on('window:confirm', (msg) =>{
            expect(msg).to.equal('Aperte um botão!')
            return(true); //simulate the confirm button
        })
        cy.contains('button', 'Mostrar Confirm')
        .click()

        cy.on('window:alert', (msg) =>{
            expect(msg).to.equal('Você clicou em Ok!')
        })
        
    })

    it('Validate dialog cancelation ', ()=>{
        cy.on('window:confirm', (msg) =>{
            expect(msg).to.equal('Aperte um botão!')
            return(false); //simulate the cancel button
        })
        cy.contains('button', 'Mostrar Confirm')
        .click()

        cy.on('window:alert', (msg) =>{
            expect(msg).to.equal('Você cancelou!')
        })
    })

    it('Validate prompt dialog ', ()=>{
        cy.window().then((win) =>{
            cy.stub(win, 'prompt').returns('Fernando')
        })
        cy.on('window:alert', (msg) =>{
            expect(msg).to.equal('Olá Fernando! Boas-vindas ao WebDojo!')
        })

    
    })
}
)