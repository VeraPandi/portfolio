import { mount } from "cypress/react18";
import ThemeContextProvider from "../../context/ThemeContext";
import Mode from "./Mode";

describe("Component Mode", () => {
   beforeEach(() => {
      mount(
         <ThemeContextProvider>
            <Mode />
         </ThemeContextProvider>
      );
   });

   it("Has a toggle button", () => {
      cy.get("button").should("have.class", "mode-btn-dark");
   });

   it("When the button is activated, its icon changes", () => {
      // Checks a 1st permutation
      cy.get(".mode-btn-dark").click().should("not.exist");
      cy.get("button").should("have.class", "mode-btn-light");

      // Checks a 2nd permutation
      cy.get(".mode-btn-light").click().should("not.exist");
      cy.get("button").should("have.class", "mode-btn-dark");
   });
});
