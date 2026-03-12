Cypress.Commands.add('fillForm', (type) => {
    cy.contains('div', 'Nome Completo *')
        .find('input')
        .type(type.name)
    cy.get('input[id="email"]').type(type.email)
    cy.get('input[id="phone"]').type(type.phone)

    if (type.consultancyType === 'Individual') {
        cy.get('select[id="consultancyType"]').select(type.consultancyType)
            .should('have.value', 'individual')
    }
    if (type.consultancyType === 'In Company') {
        cy.get('select[id="consultancyType"]').select(type.consultancyType)
            .should('have.value', 'inCompany')
    }

    if (type.personType === 'Pessoa Jurídica') {
        cy.contains('label', 'Pessoa Jurídica')
            .find('input[type="radio"]')
            .click()
        cy.contains('div', 'CNPJ')
            .find('input')
            .type(type.documentNumber)
    }
    if (type.personType === 'Pessoa Física') {
        cy.contains('label', 'Pessoa Física')
            .find('input[type="radio"]')
            .click()
        cy.contains('div', 'CPF')
            .find('input')
            .type(type.documentNumber)
    }

    type.channels.forEach(element => {
        cy.contains('label', element)
            .find('input')
            .check()
    });
    cy.get('input[type="file"]')
        .selectFile(type.file, { force: true })

    cy.get('textarea[id="details"]')
        .type(type.text)

    //const techs = ['Cypress', 'Selenium', 'Robot', 'Playwright']
    type.techs.forEach(element => {
        cy.contains('div', 'Tecnologias')
            .find('input')
            .type(element + '{enter}')
        cy.contains('div', 'Tecnologias')
            //.parent()
            .contains('span', element)
            .should('be.visible')

    });

    if (type.terms === true) {
        cy.contains('label', 'Li e aceito os')
            .find('input')
            .check()
    }
})

Cypress.Commands.add('submitForm', ()=>{
            cy.contains('button', 'Enviar formulário')
            .click()
})

Cypress.Commands.add('validateSubmittion', ()=>{
    cy.get('.modal-content', { timeout: 7000 })
            .should('be.visible')
            .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
})