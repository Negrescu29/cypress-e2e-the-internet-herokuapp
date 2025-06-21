describe("Checkboxes Page", () => {
  const checkboxSelector = 'input[type="checkbox"]';

  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
  });

  it("should check the first checkbox and verify it is checked", () => {
    cy.get(checkboxSelector).first().as("firstCheckbox");
    cy.get("@firstCheckbox").check().should("be.checked");
  });

  it("should uncheck the last checkbox and verify it is unchecked", () => {
    cy.get(checkboxSelector).last().as("lastCheckbox");
    cy.get("@lastCheckbox").uncheck().should("not.be.checked");
  });

  it("should select all checkboxes and verify they are selected", () => {
    cy.get(checkboxSelector)
      .check()
      .each(($el) => {
        cy.wrap($el).should("be.checked");
      });
  });
  
  it("should unselect all checkboxes and verify they are unselected", () => {
    cy.get(checkboxSelector)
      .uncheck()
      .each(($el) => {
        cy.wrap($el).should("not.be.checked");
      });
  });
});
