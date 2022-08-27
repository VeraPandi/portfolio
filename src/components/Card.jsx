import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { worksList } from "../datas/works";

const Card = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <section className="cards">
         {worksList
            .map((element) => (
               <div className={`card ${theme}`} key={element.id}>
                  <img src={element.cover} alt="" />
                  <div className="card-text">
                     <p className="card-tags">{element.techs.join(" / ")}</p>
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
