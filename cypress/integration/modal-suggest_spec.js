describe('Modal Suggestion Test', () => {
    beforeEach(() => {
        cy.visit(`/person/${Cypress.env('personId')}`);
    });
    it('Opens modal', () => {
        cy.get('#Production .fa-plus-square').click();
        cy.get('.ReactModal__Content').should('exist');
    });
    // it('Selects a publication', () => {
    //     cy.get('#Production .fa-plus-square').click();
    //     const $element = cy.get('input[type="checkbox"]').first();
    //     $element.click();
    //     $element.should('be.checked');
    // });
});