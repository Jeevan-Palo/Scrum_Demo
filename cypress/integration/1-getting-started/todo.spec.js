/// <reference types="cypress" />

describe("example to-do app", () => {
  it("Launch the URL", () => {
    cy.visit(
      "https://sparklingorange.blob.core.windows.net/battleship/index.html"
    );
  });

  it("Select position for Aircraft Carrier", () => {
    cy.get("h2").should("have.text", "Select position for Aircraft Carrier");
    cy.wait(1000);
    cy.get(":nth-child(3) > :nth-child(4) > button").trigger("click");
  });
  it("Select direction for Aircraft Carrier", () => {
    cy.get("h2").should("have.text", "Select direction for Aircraft Carrier");
    cy.wait(1000);
    cy.get(":nth-child(3) > button").trigger("click");
  });

  it("Select position for Battleship", () => {
    cy.get("h2").should("have.text", "Select position for Battleship");
    cy.wait(1000);
    cy.get(":nth-child(5) > :nth-child(2) > button").trigger("click");
  });

  it("Select direction for Battleship", () => {
    cy.get("h2").should("have.text", "Select direction for Battleship");
    cy.wait(1000);
    cy.get(":nth-child(3) > :nth-child(2) > button").trigger("click");
  });

  it("Select position for Submarine", () => {
    cy.get("h2").should("have.text", "Select position for Submarine");
    cy.wait(1000);
    cy.get(":nth-child(5) > :nth-child(8) > button").trigger("click");
  });

  it("Select direction for Submarine", () => {
    cy.get("h2").should("have.text", "Select direction for Submarine");
    cy.wait(1000);
    cy.get(":nth-child(1) > :nth-child(2) > button").trigger("click");
  });

  it("Select position for Patrol", () => {
    cy.get("h2").should("have.text", "Select position for Patrol");
    cy.wait(1000);
    cy.get(":nth-child(2) > :nth-child(5) > button").trigger("click");
  });

  it("Select direction for Patrol", () => {
    cy.get("h2").should("have.text", "Select direction for Patrol");
    cy.wait(1000);
    cy.get(":nth-child(1) > button").trigger("click");
  });
});
