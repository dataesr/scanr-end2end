describe('Profile #2', () => {
    it('Looks for opportunities', () => {
        cy.visit('www.linkedin.com');
        cy.get('.nav__cta-container .nav__button-secondary').click();
        cy.get('#username').type('');
        cy.get('#password').type('');
        cy.get('.login__form_action_container .btn__primary--large.from__button--floating').click();

        cy.visit(Cypress.env('searchUrl'));
        cy.get('.reusable-search__entity-results-list > li').eq(1).click()
        cy.wait(3000);
        cy.get('.poc-opportunities-card__text-content').should('not.exist');
    });
});
