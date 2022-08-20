import React from "react";
import Link from "../components/Link";

const Intro = () => {
   return (
      <section className="intro">
         <h1>Mon titre</h1>

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
