import loc from "../locators";

Cypress.Commands.add("findProduct", (findProduct) => {
    cy.contains(findProduct).should('be.visible')
});

Cypress.Commands.add("whatsNew", (msgPopup) => {
    cy.contains(msgPopup).should('be.visible')
  });

  Cypress.Commands.add("addToCart", () => {
    cy.get(loc.addToCart.btnAddSize28).click();
    cy.get(loc.addToCart.btnAddCollorBlack).click();    
    cy.get(loc.addToCart.btnAddToCart).should('be.visible');
  });
