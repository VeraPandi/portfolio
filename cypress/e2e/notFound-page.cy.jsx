import visit from "cypress/react18";

describe("404 page", () => {
   it("Redirection to the 404 page when the url is incorrect", () => {
      cy.visit("/portfolio/doesNotExist");
      cy.location("pathname").should("eq", "/portfolio/404");
   });

   context("Elements visible on the page:", () => {
      it("A display theme button", () => {
         cy.get('[data-cy="mode-btn"]');
      });

      context("Some error messages", () => {
         it("A '404' number", () => {
            cy.get(".error-code").should("have.text", "404");
         });

         it("A text", () => {
            cy.get(".error-message").should(
               "have.text",
               "Oups ! La page que vous recherchez semble introuvable..."
            );
         });
      });

      it("A footer", () => {
         cy.get(".footer");
      });

      context("Navigation with:", () => {
         it("A link to return to the home page", () => {
            cy.get('[data-cy="navigation"] > a').first().click();
            cy.location("pathname").should("eq", "/portfolio/");
         });

         it("A link to return to the 'projects' page", () => {
            cy.visit("/portfolio/404");
            cy.get('[data-cy="navigation"] > a').last().click();
            cy.location("pathname").should("eq", "/portfolio/Projects");
         });
      });
   });
});
