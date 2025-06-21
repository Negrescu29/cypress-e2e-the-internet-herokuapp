class ProductPage {
  // Selectors
  get searchInput() {
    return cy.get('input[type="text"]');
  }
  get searchButton() {
    return cy.get('button[type="submit"]');
  }
  get productTitles() {
    return cy.get("h3");
  }
  get addToCartButtons() {
    return cy.get("button");
  }
  get cartTotal() {
    return cy.get(".badge");
  }
  get cartDropdown() {
    return cy.get("#cart");
  }

  // Actions
  searchProduct(productName) {
    this.searchInput.clear().type(productName);
    this.searchButton.click();
    return this;
  }

  addFirstProductToCart() {
    this.addToCartButtons.first().click();
    return this;
  }

  verifyProductExists(productName) {
    this.productTitles.should("contain", productName);
    return this;
  }

  verifyCartUpdated() {
    this.cartTotal.should("not.contain", "0");
    return this;
  }
}

export default new ProductPage();
