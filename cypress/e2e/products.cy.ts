import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { ProductMethods } from "cypress/pageObjects/products/products.methods";

describe("template spec", () => {
  var login = new LoginMethods();
  var products = new ProductMethods();

  beforeEach(function () {
    login.navigateToLoginAndCloseDialog("http://localhost:3000/login#/login");
    login.login("dimitrijatimeskidimitrija@juice-sh.op", "cypress12345");
    login.verifySuccessfullLogin();
  });

  it("User should be able to add item into basket", () => {
    cy.get(".mat-search_icon-search").click();
    cy.get("#mat-input-0").type("apple juice");
    cy.get("#mat-input-0").type("{enter}");
    cy.get('[aria-label="Add to Basket"]').click();
    cy.get(".fa-3x.warn-notification").should("have.text", "1");
  });

  it("User should be able to remove item from basket", () => {
    cy.get('[class="mat-focus-indicator buttons mat-button mat-button-base ng-star-inserted"]').click();
    cy.get('[class="mat-focus-indicator mat-icon-button mat-button-base"]').click();
    cy.get(".fa-3x.warn-notification").should("have.text", "0");
  });

  it("User should check that the item is not in stock and cannot be added to basket", () => {
    cy.get(".mat-search_icon-search").click();
    cy.get("#mat-input-0").type('OWASP Juice Shop "King of the Hill" Facemask');
    cy.get("#mat-input-0").type("{enter}");
    cy.get('[aria-label="Add to Basket"]').click();
    cy.get('[class="mat-simple-snack-bar-content"]').should("have.text", "We are out of stock! Sorry for the inconvenience.");
  });
  
  // it("POM: User should be able to add item into basket", () => {
  //   products.addItemToBasket("apple juice");
  //   products.verifyItemAddedToBasket("1");
  // });
});

