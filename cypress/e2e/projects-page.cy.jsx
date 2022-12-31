import visit from "cypress/react18";
import { worksList } from "../../src/services/works";

describe("Projects page", () => {
   it("The page can be visited", () => {
      cy.visit("/portfolio/Projects");
   });

   /* ------------- Theme ------------ */
   context("Display theme", () => {
      it("A light display theme is displayed by default", () => {
         cy.get("html").should("have.class", "lightMode");
      });

      it("The display theme is modified when changing display mode", () => {
         cy.get("[data-cy='mode-btn']").click();
         cy.get("html").should("have.class", "darkMode");
      });
   });

   /* ------------- Cards ------------ */
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

         context("Several contextual information", () => {
            it("A type", () => {
               cy.get("[data-cy='card-content-right']").each((el, i) => {
                  cy.wrap(el)
                     .find(".type-context")
                     .should(
                        "contain.text",
                        projects[i].type === "Side project"
                           ? "Side project"
                           : "Formation"
                     );
               });
            });

            it("A member", () => {
               cy.get("[data-cy='card-content-right']").each((el, i) => {
                  cy.wrap(el)
                     .find(".member-context")
                     .should(
                        "contain.text",
                        projects[i].member === "Seul" ? "Seul" : "En équipe"
                     );
               });
            });

            it("A time", () => {
               cy.get("[data-cy='card-content-right']").each((el, i) => {
                  cy.wrap(el)
                     .find(".time-context")
                     .should("contain.text", projects[i].time)
                     .and("have.length", projects[i].time.length > 0);
               });
            });
         });

         it("An intro", () => {
            cy.get("[data-cy='card-content-right']").each((el, i) => {
               cy.wrap(el)
                  .find(".card-intro")
                  .should("have.text", projects[i].intro);
            });
         });

         context("A collapse", () => {
            it("is visible", () => {
               cy.get("[data-cy='chevron-down']").should(
                  "have.length",
                  projects.length
               );
            });

            it("Is closed in the initial state", () => {
               cy.get("[data-cy='chevron-down']")
                  .eq(0)
                  .should("not.have.class", "active")
                  .prev(".card-intro");
            });

            it("It opens and closes correctly after an event", () => {
               // Checks button and intro elements
               cy.get("[data-cy='chevron-down']")
                  .eq(0)
                  .click() // After the first event
                  .should("have.class", "active") // The button must have the "active" class
                  .prev(".card-intro.active") // We check that the "intro" element also has the "active" class
                  .and("have.text", projects[0].intro) // The text of the "intro" element must be displayed correctly
                  .next() // Then we go back to the button
                  .click() // After the second event
                  .should("not.have.class", "active") // The button must not have the "active" class
                  .prev(".card-intro"); // We check that the "intro" element has also removed its "active" class
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

      /* ------------ Footer ------------ */
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

   /* ---------- Navigation ---------- */
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
