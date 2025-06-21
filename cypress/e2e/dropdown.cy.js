describe("Dropdown Page", () => {
  const dropdownSelector = "#dropdown";

  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/dropdown");
    cy.get(dropdownSelector).as("dropdown");
  });

  it('should display "Please select an option" as the default option', () => {
    cy.get(dropdownSelector)
      .find("option:selected")
      .should("have.value", "")
      .and("have.text", "Please select an option");
  });

  it("should select Option 1 and verify it is selected", () => {
    cy.get(dropdownSelector).select("Option 1");
    cy.get(`${dropdownSelector} option:selected`)
      .should("have.attr", "selected", "selected")
      .and("contain", "Option 1");
  });

  it("should select Option 2 and verify it is selected", () => {
    cy.get(dropdownSelector).select("Option 2");
    cy.get(`${dropdownSelector} option:selected`)
      .should("have.attr", "selected", "selected")
      .and("contain", "Option 2");
  });
  it("should switch from Option 1 to Option 2 and verify each selection", () => {
    cy.get(dropdownSelector).select("Option 1");
    cy.get(`${dropdownSelector} option:selected`)
      .should("have.attr", "selected", "selected")
      .and("contain", "Option 1");

    cy.get(dropdownSelector).select("Option 2");
    cy.get(`${dropdownSelector} option:selected`)
      .should("have.attr", "selected", "selected")
      .and("contain", "Option 2");
  });

  it("should not allow multiple selections", () => {
    cy.get(dropdownSelector).should("not.have.attr", "multiple");
  });
});
