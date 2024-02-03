/// <reference types = "cypress" />

import "../../support/register/registerCommands";
import "../../support/register/registerAssertions";
import {fakerPT_BR as faker} from '@faker-js/faker';

const name = faker.person.firstName();
const nameLast = faker.person.lastName();
const email = faker.internet.email();
const password = faker.internet.password(8);

describe('Register', () => {
  beforeEach(() => {
    cy.visit('/customer/account/create/')
    cy.title().should('eq', "Create New Customer Account")
  });

  it('Register success', () => {
    cy.fillInName(name);
    cy.fillInlastName(nameLast);
    cy.fillInEmail(email);
    cy.fillInPassword(password);
    cy.fillInPasswordConfirmation(password);
    cy.clickRegisterButton();
    cy.validateSuccessMessage("Thank you for registering with Main Website Store.");
  })

  
})