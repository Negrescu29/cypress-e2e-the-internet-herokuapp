import LoginPage from "../../support/page-objects/LoginPage";

describe("Login Functionality", () => {
  let users;

  before(() => {
    cy.fixture("users").then((userData) => {
      users = userData;
    });
  });

  beforeEach(() => {
    LoginPage.visit();
  });

  it("should login with valid credentials", () => {
    LoginPage.login(
      users.validUser.email,
      users.validUser.password
    ).verifyLoginSuccess();
  });

  it("should show error for invalid credentials", () => {
    LoginPage.login(
      users.invalidUser.email,
      users.invalidUser.password
    ).verifyLoginError("Your username is invalid!");
  });

  it("should handle empty form submission", () => {
    LoginPage.clickLogin().verifyLoginError("Your username is invalid!");
  });
});
