import "@testing-library/cypress/add-commands";

/// <reference types="cypress"/>
describe("Login unsuccessfully", () => {
  it("requires correct password", () => {
    cy.visit("/login");

    cy.findByPlaceholderText("Email Address").type(
      "test_regular_user@dispostable.com"
    );
    cy.findByPlaceholderText("Password").type("someWrongPassword{enter}");

    cy.findByText(
      "The password is incorrect, please check it and try again or use the Forgot Password feature."
    ).should("exist");
  });
});

// TODO:
// Edge cases like locked / deleted accounts
// Login but have not verified account
