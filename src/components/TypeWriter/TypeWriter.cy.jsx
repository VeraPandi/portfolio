import { mount } from "cypress/react18";
import TypeWriter from "./TypeWriter";

describe("Component Typewriter", () => {
   beforeEach(() => {
      mount(<TypeWriter />);
   });

   it("Displays the title 'Je suis développeuse'", () => {
      cy.get("[data-cy=typewriter-title-one]").should(
         "have.text",
         "Je suis développeuse "
      );
   });

   it("Displays a first value equal to 'JavaScript'", () => {
      cy.get("[data-cy=typewriter-title-two]").should(
         "have.text",
         "JavaScript"
      );
   });

   it("Displays a second value equal to 'React'", () => {
      cy.get("[data-cy=typewriter-title-two]").should("have.text", "React");
   });
});
