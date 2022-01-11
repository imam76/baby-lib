describe('todo: Todo component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=todo--primary&args=todoList;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Todo!');
    });
});
