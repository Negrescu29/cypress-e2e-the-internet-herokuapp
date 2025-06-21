// Login command
Cypress.Commands.add("login", (email, password) => {
  cy.visit("/index.php?route=account/login");
  cy.get("#input-email").type(email);
  cy.get("#input-password").type(password);
  cy.get('input[type="submit"][value="Login"]').click();
  cy.url().should("contain", "account/account");
});

// Custom wait for API response
Cypress.Commands.add("waitForAPI", (alias, timeout = 10000) => {
  cy.wait(alias, { timeout });
});


// Screenshot comparison
Cypress.Commands.add("compareSnapshot", (name, options = {}) => {
  cy.screenshot(name, options);
  // Integration with visual testing tools
});

// Form filling helper
Cypress.Commands.add("fillForm", (formData) => {
  Object.keys(formData).forEach((field) => {
    cy.get(`[data-testid="${field}"]`).type(formData[field]);
  });
});

// API intercepts for testing
Cypress.Commands.add("mockAPI", (method, url, response) => {
  cy.intercept(method, url, response).as("mockedAPI");
});
