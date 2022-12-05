import { mount } from "cypress/react18";
import ThemeContextProvider from "../../context/ThemeContext";
import Tags from "./Tags";

describe("Component Tags", () => {
   const initial = ["value2", "value1", "value3"];

   beforeEach(() => {
      mount(
         <ThemeContextProvider>
            <Tags array={initial} />
         </ThemeContextProvider>
      );
   });

   it("Displays a list of tags", () => {
      cy.get("[data-cy=tags]").find("li").should("have.length", 3);
   });

   it("Sorted alphabetically", () => {
      cy.get("[data-cy=tags]").find("li").eq(0).should("have.text", "value1");
   });
});
