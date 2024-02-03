/// <reference types = "cypress" />

import "../../support/addToCart/addToCartCommands";
import "../../support/addToCart/addToCartAssertions";
import "../../support/login/loginCommands";
import "../../support/login/loginAssertions";

describe('Add To Cart', () => {
    beforeEach(() => {
        cy.visit("/customer/account/login/referer/")
    });

    it('Add To Cart Sucess', () => {
        cy.logIn();
        cy.whatsNew("What's New").click();
        cy.findProduct("Echo Fit Compression Short").click();
        cy.addToCart().click()

    });
});