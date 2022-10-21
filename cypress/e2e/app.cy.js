describe('renders the home page', () => {
  it('renders correctly', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.get('#test').should('exist');
  });
});
