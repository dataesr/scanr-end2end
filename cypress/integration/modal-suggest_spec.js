describe('Modal Suggestion Test', () => {
    beforeEach(() => {
        cy.visit(`/person/${Cypress.env('personId')}`);
    });
    it('Opens modal', () => {
        cy.get('#Production .fa-plus-square').click();
        cy.get('.ReactModal__Content').should('exist');
    });
    it('Selects a publication', () => {
        cy.get('#Production .fa-plus-square').click();
        cy.get('.ReactModal__Content .fa-square').first().click();

        cy.get('.fa-check-square').should(($checkboxChecked) => {
            expect($checkboxChecked).to.have.length(1);
        });
    });
    it('Contributes a publication', () => {
        cy.get('#Production .fa-plus-square').click();
        cy.get('.ReactModal__Content .fa-square').eq(2).click();
        cy.contains('Valider').click();
        cy.get('#email').type('test@endtoend.com');
        cy.get('#message').type('Message test!');
        cy.contains('Envoyer').click();

        cy.get('.alert-dark span').should('eq', 'Merci pour vos contributions')
    });
});