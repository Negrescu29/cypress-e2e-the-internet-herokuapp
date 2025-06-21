class LoginPage {
  // Selectors
  get emailInput() {
    return cy.get("#username");
  }
  get passwordInput() {
    return cy.get("#password");
  }
  get loginButton() {
    return cy.get('button[type="submit"]');
  }
  get errorMessage() {
    return cy.get(".flash.error");
  }
  get successMessage() {
    return cy.get(".flash.success");
  }

  // Actions
  visit() {
    cy.visit("/login", { failOnStatusCode: false });
    return this;
  }

  fillEmail(email) {
    this.emailInput.clear().type(email);
    return this;
  }

  fillPassword(password) {
    this.passwordInput.clear().type(password);
    return this;
  }

  clickLogin() {
    this.loginButton.click();
    return this;
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickLogin();
    return this;
  }

  // Validations
  verifyLoginSuccess() {
    cy.url().should("contain", "/secure");
    this.successMessage.should("be.visible");
    return this;
  }

  verifyLoginError(expectedMessage) {
    this.errorMessage.should("be.visible");
    this.errorMessage.should("contain", expectedMessage);
    return this;
  }
}

export default new LoginPage();
