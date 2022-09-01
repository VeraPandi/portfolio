import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { worksList } from "../datas/works";

/**
 * Displays a card for each project
 * @const {string} theme - Initial mode name
 * @const {array} worksList - Datas
 * @return {JSX.Element} - Card
 */

const Card = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <section className="cards">
         {worksList
            .map((element) => (
               <div className={`card ${theme}`} key={element.id}>
                  <img src={element.cover} alt="" />

                  <div className={`card-text ${theme}`}>
                     <p className={`card-tags ${theme}`}>
                        {element.techs.join(" / ")}
                     </p>

                     <Link to={`/Work/${element.id}`}>
                        <span className={`card-btn ${theme}`}>
                           Voir le projet
                        </span>
                     </Link>
                  </div>
               </div>
            ))
            .reverse()}
      </section>
   );
};

export default Card;
