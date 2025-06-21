describe("Intentional Failure Demo", () => {
  it("should fail on purpose to trigger screenshot and video capture", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    // This selector does not exist, so the test will fail
    cy.get(".this-element-does-not-exist").should("be.visible");
  });
});
