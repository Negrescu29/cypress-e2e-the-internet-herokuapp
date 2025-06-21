describe("Entry Ad Page", () => {
  const modal = ".modal";
  const closeModalButton = ".modal-footer p";
  const reenableLinkSelector = 'a[href="#"]';

  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/entry_ad");
  });

  it("should display the modal on first load", () => {
    cy.get(modal).should("be.visible");
  });

  it("should close the modal when the close button is clicked", () => {
    cy.get(modal).should("be.visible");
    cy.get(closeModalButton).contains("Close").click();
    cy.get(modal).should("not.be.visible");
  });
});
