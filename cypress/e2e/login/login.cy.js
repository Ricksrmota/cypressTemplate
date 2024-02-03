/// <reference types = "cypress" />

import "../../support/login/loginCommands";
import "../../support/login/loginAssertions";

describe('Login', () => {
    beforeEach(() => {
        cy.visit("/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvMi1kZW1vLm1hZ2ViaXQuY29tL2N1c3RvbWVyL2FjY291bnQvY3JlYXRlLw%2C%2C/")
    });

    it('Login success', () => {
        cy.fillInEmail("roni_cost@example.com");
        cy.fillInPassword("roni_cost3@example.com");
        cy.clickButton();
    });

    it('Login with invalid password', () => {
        cy.fillInEmail("roni_cost@example.com");
        cy.fillInPassword("teste23871");
        cy.clickButton();
        cy.validateMsgError("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
    });

    it('Validate link create account', () => {
        cy.clickLinkCreateAccount();
        cy.validatePaginaRegistration();
    });
});