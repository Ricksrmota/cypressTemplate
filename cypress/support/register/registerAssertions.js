import loc from "../locators";

Cypress.Commands.add("validateSuccessMessage", (msgPopup) => {
  cy.contains(msgPopup).should('be.visible')
});


Cypress.Commands.add("validateErrorAlert", (alertError) => {
    cy.get(loc.register.alertErro).should('have.text', alertError);
  });

