describe('Modal Suggestion Test', () => {
    beforeEach(() => {
        cy.visit(`/person/${Cypress.env('personId')}`, {
            onBeforeLoad(win) {
                Object.defineProperty(win.navigator, 'language', {
                    value: 'fr'
                });
            }
        });
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
});