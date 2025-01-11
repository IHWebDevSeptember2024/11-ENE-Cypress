describe("template spec", () => {
  it("contains the H1 with the title", () => {
    cy.visit("https://reactorants.netlify.app/");
    cy.get("h1").contains("REACTORANTS");
  });
  it("creates a new restaurant", () => {
    cy.visit("https://reactorants.netlify.app/");
    cy.get("button").contains("Create Restaurant").click();
    cy.get("form").should("be.visible");
    cy.get("#restaurant-name").type("Honest greens");
    cy.get("#restaurant-rating").type("7");
    cy.get("#restaurant-type").type("Mediterranean");
    cy.get("#restaurant-url").type(
      "https://www.google.com/maps?hl=en&gl=es&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x12a4a3a21ff67e99:0xe7bead2ed499aa"
    );
    cy.get('button[type="submit"]').click();
    cy.get(".card").find("h3").contains("Honest greens");
  });
  it("deletes the restaurant", () => {
    cy.visit("https://reactorants.netlify.app/");
    cy.get(".card")
      .find("h3")
      .contains("Honest greens")
      .parent()
      .parent()
      .contains("Delete")
      .click();
    cy.get(".modal > .modal-buttons button").first().click();
    cy.get(".card").find("h3").contains("Honest greens").should("not.exist");
  });
});
