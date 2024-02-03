import loc from "../locators";

Cypress.Commands.add("acessCar", () => {
    cy.get(loc.purchase.btnCart).click();
});

Cypress.Commands.add("proceedCheckout", () => {
  cy.get(loc.purchase.btnCheckout ).click();
});

Cypress.Commands.add("confirmShipping", () => {
  cy.get(loc.purchase.btnBestWay).click();
  cy.get(loc.purchase.btnNext).click();
});

Cypress.Commands.add("confirmOrder", () => {
  cy.get(loc.purchase.btnPlaceOrder).click();
  
});

Cypress.Commands.add("confirmPurchase", (msgPurchase) => {
  cy.get(loc.purchase.msgPurcaseDone).should('be.visible').and('contain', msgPurchase)
});