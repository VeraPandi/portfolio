import visit from "cypress/react18";

describe("404 page", () => {
   it("Redirection vers la page 404 quand l'url est incorrecte", () => {
      cy.visit("/portfolio/doesNotExist");
      cy.location("pathname").should("eq", "/portfolio/404");
   });

   context("Tous les éléments de la page sont visibles", () => {
      it("Un bouton de mode d'affichage", () => {
         cy.get('[data-cy="mode-btn"]');
      });

      it("Une navigation", () => {
         cy.get('[data-cy="navigation"]');
      });

      it("Un message d'erreur", () => {
         cy.get(".error-code").should("have.text", "404");
         cy.get(".error-message").should(
            "have.text",
            "Oups ! La page que vous recherchez semble introuvable..."
         );
      });

      it("Un footer", () => {
         cy.get(".footer");
      });
   });
});
