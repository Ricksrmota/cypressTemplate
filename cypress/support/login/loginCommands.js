import loc from "../locators";

Cypress.Commands.add("fillInEmail", (email) => {
    cy.get(loc.login.inputEmail).type(email);
});

Cypress.Commands.add("fillInPassword", (password) => {
    cy.get(loc.login.inputPassword).type(password);
});

Cypress.Commands.add("clickButton", () => {
    cy.get(loc.login.btnLogin).click();
});

Cypress.Commands.add("clickButtonOk", () => {
    cy.get(loc.login.btnOk).click();
});


Cypress.Commands.add("clickLinkCreateAccount", () => {
    cy.get(loc.login.linkCreateAccount).click({force: true});
});

Cypress.Commands.add("logIn", () => {
    cy.fillInEmail("roni_cost@example.com");
        cy.fillInPassword("roni_cost3@example.com");
        cy.clickButton({ multiple: true });
        
});