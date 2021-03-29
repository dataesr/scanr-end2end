describe('Modal Contrib Suggestion Test', () => {
    beforeEach(() => {
        cy.visit(`/person/${Cypress.env('personId')}`, {
            onBeforeLoad(win) {
                Object.defineProperty(win.navigator, 'language', {
                    value: 'fr'
                });
            }
        });
    });

    it('Contributes a suggestion', () => {
        cy.get('#Production .fa-plus-square').click();
        cy.get('.ReactModal__Content .fa-square').eq(2).click();
        cy.contains('Valider').click();
        cy.get('#email').type('test@endtoend.com');
        cy.get('#message').type('Message test!');
        cy.contains('Envoyer').click();
        cy.get('.alert-dark span').should('contain.text', 'Merci pour vos contributions');
    });
});