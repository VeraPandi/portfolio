import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Link from "../components/Link";
import TypeWriter from "../components/TypeWriter";

/**
 * Displays an information block
 * @const {string} theme - Current mode name
 * @return {JSX.Element} - information block
 */

const Intro = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <section className={`intro ${theme}`}>
         <h1 className="title">Vera Pandi</h1>
         <TypeWriter />

         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl
            euismod urna bibendum
         </p>

         <div className={`view-more ${theme}`}>
            <Link
               path="/Project"
               className={`link project-link ${theme}`}
               name="Mes projets"
            />
            <Link
               path="/Contact"
               className={`link contact-link ${theme}`}
               name="Me contacter"
            />
         </div>
      </section>
   );
};

export default Intro;
