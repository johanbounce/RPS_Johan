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
    cy.get("#rock").click();
    cy.get("#you-pick").should("contain", "You picked rock");
  });

  it("successfully choose paper as your pick", () => {
    cy.get("button")
      .contains("ENTER GAME")
      .click();
      cy.get("#paper").click();
      cy.get("#you-pick").should("contain", "You picked paper");
  });

  it("successfully choose scissors as your pick", () => {
    cy.get("button")
      .contains("ENTER GAME")
      .click();
      cy.get("#scissors").click();
      cy.get("#you-pick").should("contain", "You picked scissors");
  });
});
