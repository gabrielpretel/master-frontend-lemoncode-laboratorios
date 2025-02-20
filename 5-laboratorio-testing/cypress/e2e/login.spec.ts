describe('Login specs', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('visit login page', () => {});

  it('should user input has the focus when it clicks on it', () => {
    // Arrange

    // Act
    cy.findByRole('textbox').click();

    // Assert
    cy.findByRole('textbox').should('have.focus');
  });

  it('should a show a snackbar with a message when type invalid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = '1234';

    // Act
    cy.findByRole('textbox').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', {
      name: 'Login',
    }).click();

    cy.findByRole('presentation').as('snackbarAlert');

    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.get('@snackbarAlert')
      .should('be.visible')
      .and('contain.text', 'Usuario y/o password no válidos');
  });

  it('should navigate to submodule-list URL when type valid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';

    // Act
    cy.findByRole('textbox').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.findByRole('button', {
      name: 'Login',
    }).click();

    // Assert
    cy.url().should('contain', '/submodule-list');
  });
});
