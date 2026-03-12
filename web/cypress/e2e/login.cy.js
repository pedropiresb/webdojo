import { getActualDate } from "../support/utils";



describe('Login', () => {

 

  it('Invalid Email', () => {
    cy.openPage()
    cy.submitLogin('papitoebdojo.com','katana123')
    cy.contains('p','Hmm... esse email parece estar errado 🤔')
    .should('be.visible')

  })

  it('Wrong Email', () => {
    cy.openPage()
    cy.submitLogin('papito2@webdojo.com','katana123')
    cy.contains('div','Acesso negado! Tente novamente')
    .should('be.visible')

  })

  it('Login Success', () => {
    cy.openPage()
    cy.submitLogin('papito@webdojo.com','katana123')
    cy.contains('h2','Fernando Papito')
    .should('be.visible')
    cy.get('p[data-cy="welcome-message"]')
    .should('have.text','Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
    cy.getCookie('login_date').should('exist')
    cy.getCookie('login_date').should((cookie)=>{
      expect(cookie.value).to.eq(getActualDate())
    })
    cy.window().then(win=>{
      const token = win.localStorage.getItem('token')
      expect(token).to.exist
    })
  })
})

