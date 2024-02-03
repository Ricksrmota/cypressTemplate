/// <reference types = "cypress" />

import "../../support/addToCart/addToCartCommands";
import "../../support/addToCart/addToCartAssertions";
import "../../support/login/loginCommands";
import "../../support/login/loginAssertions";
import "../../support/purchase/purchaseAssertions";
import "../../support/purchase/purchaseCommands";

describe('Add To Cart', () => {
    beforeEach(() => {
        cy.visit("/customer/account/login/referer/")
    });

    it('Purchase a item', () => {
        cy.logIn();
        cy.whatsNew("What's New").click();
        cy.findProduct("Echo Fit Compression Short").click();
        cy.addToCart().click();
        cy.acessCar();
        cy.proceedCheckout();
        cy.confirmShipping();
        cy.confirmOrder();
        cy.confirmPurchase("Thank you for your purchase!")

    });
});