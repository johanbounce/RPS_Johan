import { Item } from "semantic-ui-react";

describe("user can see game", () => {
  before(() => {
    cy.server();
    cy.visit("http://localhost:3000");
  });

  it("successfully choose rock as your pick", () => {
    cy.get("button")
      .contains("ENTER GAME")
      .click();
    cy.get("button")
      .contains("ROCK")
      .click();
    cy.get("#you-pick").should("contain", "You picked rock")  
  });

  it("successfully choose paper as your pick", () => {
    cy.get("button")
      .contains("ENTER GAME")
      .click();
    cy.get("button")
      .contains("PAPER")
      .click();
    cy.get("#you-pick").should("contain", "You picked paper")  
  });

  it("successfully choose scissors as your pick", () => {
    cy.get("button")
      .contains("ENTER GAME")
      .click();
    cy.get("button")
      .contains("SCISSORS")
      .click();
    cy.get("#you-pick").should("contain", "You picked scissors")  
  });
});
