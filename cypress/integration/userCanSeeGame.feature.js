describe("user can see game", () => {
  before(() => {
    cy.server();
    cy.visit("http://localhost:3000");
  });

  it("successfully sees the game header", () => {
    cy.get("#fknheader").should("contain", "ROCK PAPER SCISSOR");
  });

  it("can successfully enter game", () => {
    cy.get("button").should("contain", "ENTER GAME");
    cy.get("button")
      .contains("ENTER GAME")
      .click();
  });

  it("user can see pick alternatives", () => {
    cy.get("button")
      .contains("ENTER GAME")
      .click();
    cy.get("#buttoncontainer").should("exist");
    cy.get("#rock").should("exist");
    cy.get("#paper").should("exist");
    cy.get("#scissors").should("exist");
  });

  it("user can end game when he/she wants", () => {
    cy.get("button").should("contain", "END GAME");
  });

  it("game dissappears when game click on END GAME", () => {
    cy.get("button")
      .contains("END GAME")
      .click();
    cy.get("#btnrock").should("not.exist");
    cy.get("#btnpaper").should("not.exist");
    cy.get("#btnscissors").should("not.exist");
  });
});
