describe('Modal Suggestion Test', () => {
    beforeEach(() => {
        cy.visit('/person/idref030959829');
    });
    it('Opens modal', () => {
        cy.get('.cy-suggest').click();
        cy.get('.ReactModal__Content').should('exist')
    });
    it('Selects a publication', () => {
        cy.get('.cy-suggest').click();
        const $element = cy.get('div[class*=ProductionList__Item__]').first()
        $element.click()
        $element.find('input').should('be.checked')
    });
});