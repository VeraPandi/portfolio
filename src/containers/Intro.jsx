import React from "react";
import Link from "../components/Link";
import TypeWriter from "../components/TypeWriter";

const Intro = () => {
   return (
      <section className="intro">
         <h1 className="title">Vera Pandi</h1>
         <TypeWriter />

         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl
            euismod urna bibendum
         </p>

         <div className="view-more">
            <Link
               path="/Project"
               className="link project-link"
               name="Mes projets"
            />
            <Link
               path="/Contact"
               className="link contact-link"
               name="Me contacter"
            />
         </div>
      </section>
   );
};

export default Intro;
