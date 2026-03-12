describe('Profiles in github', ()=>{

    beforeEach(()=>{
        cy.openPage()
        cy.submitLogin('papito@webdojo.com', 'katana123')
        cy.goTo('Tabela', 'Perfis do GitHub')
    })

    it('New profile', ()=>{

       const profiles=[
            {name1:'Pedro Pires', user1:'pedropiresb', function1:'QA'},
            {name1:'Bruna Belo', user1:'bbysil', function1:'front-end'},
            {name1:'Caio Cagliani', user1:'caio', function1:'back-end'}
        ] 

        
       profiles.forEach(({name1,user1,function1}) => {
         cy.contains('div','Nome *')
        .find('input')
        .type(name1)

        cy.contains('div','Username do GitHub *')
        .find('input')
        .type(user1)

        cy.contains('div','Perfil *')
        .find('input')
        .type(function1)

        cy.contains('button','Adicionar Perfil')
        .click()
       });
       
       profiles.forEach(({name1,user1,function1}) => {
         cy.contains('table tbody tr',user1)
        .should('be.visible')
        .contains(name1)
        .should('be.visible')

        cy.contains('table tbody tr', user1)
        
        .contains(function1)
        .should('be.visible')

       });

       cy.contains('table tbody tr', 'caio')
        .find('button[title="Remover perfil"]')
        .click()

         cy.contains('table tbody tr', 'caio')
         //.find('button')
         .should('not.exist')


    })

    it('Validate github link', ()=>{

       const profiles=[
            {name1:'Pedro Pires', user1:'pedropiresb', function1:'QA'},
            {name1:'Bruna Belo', user1:'bbysil', function1:'front-end'},
            {name1:'Caio Cagliani', user1:'caio', function1:'back-end'}
        ] 

        
       profiles.forEach(({name1,user1,function1}) => {
         cy.contains('div','Nome *')
        .find('input')
        .type(name1)

        cy.contains('div','Username do GitHub *')
        .find('input')
        .type(user1)

        cy.contains('div','Perfil *')
        .find('input')
        .type(function1)

        cy.contains('button','Adicionar Perfil')
        .click()
       });
       
       profiles.forEach(({name1,user1,function1}) => {
      

        cy.contains('table tbody tr', user1)
        .find('a')
        .should('have.attr', 'href', 'https://github.com/'+user1)
        .click()
       });
       


    })
    
})