describe('Homepage Test', () => {
    it('Visits scanr', () => {
        cy.visit('/');
        cy.get('h1 > span')
            .contains('Explore the world of French Research and innovation with scanR');
    });
});
