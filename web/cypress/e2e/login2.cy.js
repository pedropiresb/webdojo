/* ==== Test Created with Cypress Studio ==== */
it('login1', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/');
  cy.get('#email').clear('pa');
  cy.get('#email').type('papito@webdojo.com');
  cy.get('#password').clear('ka');
  cy.get('#password').type('katana123');
  cy.get('.bg-\\[\\#8257E5\\]').click();
  /* ==== End Cypress Studio ==== */
});