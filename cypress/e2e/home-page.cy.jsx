import visit from "cypress/react18";
import { worksList } from "../../src/services/works";
import { skills } from "../../src/services/tags";

describe("Home page", () => {
   it("The page can be visited", () => {
      cy.visit("/portfolio");
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

   //* ------------- Hero ------------- *//
   context("Hero section", () => {
      it("An image is visible", () => {
         cy.get("[data-cy='cover']").should("be.visible");
      });

      it("An intro is visible", () => {
         cy.get("[data-cy='intro-title']").should("have.text", "Vera Pandi");
         cy.get("[data-cy='intro-paragraph']").should("not.be.empty");
      });

      it("A typewriter displays animated text", () => {
         cy.get("[data-cy='typewriter-title-one']").should(
            "have.text",
            "Je suis développeuse "
         );
         cy.get("[data-cy='typewriter-title-two']").should(
            "have.text",
            "React"
         );
         cy.get("[data-cy='typewriter-title-two']").should(
            "have.text",
            "JavaScript"
         );
      });

      it("A button allows you to go to a section on the page", () => {
         // The initial position on the page must be 0
         cy.get(".goToMain-btn")
            .click()
            .invoke("data", "position")
            // If the move has occurred, the value should no longer be 0
            .then((position) => cy.wrap(position).should("not.equal", 0));
      });
   });

   //* ------------ Cards ------------- *//
   context("Card section", () => {
      it("A section title is visible", () => {
         cy.get("[data-cy='main-center']")
            .find("h3")
            .should("have.text", "Dernier projet");
      });

      it("A single card is visible", () => {
         cy.get("[data-cy='cards']").should("have.length", 1);
      });

      worksList.slice(-1).map((element) =>
         context("A card contains:", () => {
            it("At least one picture", () => {
               cy.get("[data-cy='card-content-left']")
                  .find(".card-cover > div > img")
                  .should("have.length.at.least", 1);
            });

            it("A title", () => {
               cy.get("[data-cy='card-content-right']")
                  .find(".card-title")
                  .should("have.text", element.title);
            });

            it("A list of technologies", () => {
               cy.get("[data-cy='card-content-right']")
                  .find(".card-tags")
                  .should("have.text", element.techs.join(" / "));
            });

            it("An intro", () => {
               cy.get("[data-cy='card-content-right']")
                  .find(".card-intro")
                  .should("have.text", element.intro);
            });

            it("A type and a time", () => {
               cy.get("[data-cy='card-content-right']")
                  .find(".card-context")
                  .should(
                     "contain.text",
                     element.type === "Side project"
                        ? `${element.type} réalisé seule en ${element.time} semaines.`
                        : `Projet de formation réalisé seule en ${element.time} semaines.`
                  )
                  .and("have.length", element.type.length > 0)
                  .and("have.length", element.time.length > 0);
            });

            it("At least one link", () => {
               cy.get("[data-cy='card-content-right']")
                  .children(".view-more")
                  .should("not.be.empty") // A link must be present
                  .find("a")
                  .should(
                     "have.prop",
                     "href",
                     element.urlDemo || element.urlGithub // And have one of these values
                  );
            });
         })
      );
   });

   //* ------------- Tags ------------- *//
   context("Tags section", () => {
      it("A section title is visible", () => {
         cy.get('[data-cy="main-bottom"]')
            .find("h3")
            .should("have.text", "Technos");
      });

      it("A list of tags is sorted alphabetically", () => {
         cy.get('[data-cy="tags"] > ul > li')
            .should("have.length", skills.length)
            .eq(0)
            .should("have.text", "CSS3");
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

   //* ---------- Navigation ---------- *//
   context("Navigation section", () => {
      it("Current page navigation link is shown as active", () => {
         cy.get('[data-cy="navigation"] > a')
            .first()
            .should("have.class", "active");
      });

      it("A navigation link leads to the 'projects' page", () => {
         cy.get('[data-cy="navigation"] > a').last().click();
         cy.location("pathname").should("eq", "/portfolio/Projects");
      });

      it("The display theme is kept on the 'projects' page", () => {
         cy.get("html").should("have.class", "darkMode");
      });

      it("New page navigation link is shown as active", () => {
         cy.get('[data-cy="navigation"] > a')
            .last()
            .should("have.class", "active");
      });
   });
});
