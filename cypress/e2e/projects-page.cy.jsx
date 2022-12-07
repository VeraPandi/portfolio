import visit from "cypress/react18";
import { worksList } from "../../src/datas/works";

describe("Projects page", () => {
   it("The page can be visited", () => {
      cy.visit("/portfolio/Projects");
   });

   //* ------------- Theme ------------ *//
   context("Display theme", () => {
      it("A light display theme is displayed by default", () => {
         cy.get("html").should("have.class", "lightMode");
      });

      it("The display theme is modified when changing display mode", () => {
         cy.get("[data-cy='mode-btn']").click();
         cy.get("html").should("have.class", "darkMode");
      });
   });

   //* ------------- Cards ------------ *//
   context("Card section", () => {
      it("A section title is visible", () => {
         cy.get('[data-cy="projects-page-main"]')
            .find("h3")
            .should("have.text", "Projets");
      });

      it("Each card is visible", () => {
         cy.get("[data-cy='cards']")
            .children()
            .should("have.length", worksList.length);
      });

      context("Each card contains:", () => {
         const projects = worksList.reverse().map((element) => element);

         it("At least one picture", () => {
            cy.get("[data-cy='card-content-left']").each((el) => {
               cy.wrap(el)
                  .find(".card-cover > div > img")
                  .should("have.length.at.least", 1);
            });
         });

         it("A title", () => {
            cy.get("[data-cy='card-content-right']").each((el, i) => {
               cy.wrap(el).find("h4").should("have.text", projects[i].title);
            });
         });

         it("A list of technologies", () => {
            cy.get("[data-cy='card-content-right']").each((el, i) => {
               cy.wrap(el)
                  .find(".card-tags")
                  .should("have.text", projects[i].techs.join(" / "));
            });
         });

         it("An intro", () => {
            cy.get("[data-cy='card-content-right']").each((el, i) => {
               cy.wrap(el)
                  .find(".card-intro")
                  .should("have.text", projects[i].intro);
            });
         });

         it("A type and a time", () => {
            cy.get("[data-cy='card-content-right']").each((el, i) => {
               cy.wrap(el)
                  .find(".card-context")
                  .should(
                     "contain.text",
                     projects[i].type === "Side project"
                        ? `${projects[i].type} réalisé seule en ${projects[i].time} semaines.`
                        : `Projet de formation réalisé seule en ${projects[i].time} semaines.`
                  )
                  .and("have.length", projects[i].type.length > 0)
                  .and("have.length", projects[i].time.length > 0);
            });
         });

         it("At least one link", () => {
            cy.get("[data-cy='card-content-right']").each((el, i) => {
               cy.wrap(el)
                  .find(".view-more")
                  .should("not.be.empty") // A link must be present
                  .find("a")
                  .should(
                     "have.prop",
                     "href",
                     projects[i].urlDemo || projects[i].urlGithub // And have one of these values
                  );
            });
         });
      });

      //* ------------ Footer ------------ *//
      context("Footer section", () => {
         it("A section title is visible", () => {
            cy.get('[data-cy="followMe"]').should("have.text", "Me suivre");
         });

         it("Links are visible", () => {
            cy.get('[data-cy="github-link"]').should(
               "have.prop",
               "href",
               "https://github.com/VeraPandi"
            );
            cy.get('[data-cy="linkedin-link"]').should(
               "have.prop",
               "href",
               "https://www.linkedin.com/in/v-l-28bbab24a/"
            );
         });
      });
   });

   //* ---------- Navigation ---------- *//
   context("Navigation section", () => {
      it("Current page navigation link is shown as active", () => {
         cy.get('[data-cy="navigation"] > a')
            .last()
            .should("have.class", "active");
      });

      it("A navigation link leads to the 'projects' page", () => {
         cy.get('[data-cy="navigation"] > a').first().click();
         cy.location("pathname").should("eq", "/portfolio/");
      });
   });
});
