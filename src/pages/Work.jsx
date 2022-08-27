import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { worksList } from "../datas/works";
import PageTitle from "../components/PageTitle";

/**
 * Displays a page for each project
 * @const {string} theme - Initial mode name
 * @const {string} ID - Page ID
 * @const {object} work - Project object having the same ID as the ID retrieved in the URL parameters
 * @return {object} - Page
 */

const Work = () => {
   const { theme } = useContext(ThemeContext);

   const { ID } = useParams();
   const work = worksList.find((element) => element.id === ID);
   console.log(work.gallery.map((image) => image));

   return (
      <main className="page-main">
         <PageTitle
            title="Projets"
            text={`title-text ${theme}`}
            underline={`underline ${theme}`}
         />

         <article>
            <div className="picture">
               <img src={work.cover} alt="" />
               {/* "/images/photo.png" */}
            </div>
            <h2 className="Projet-title">{work.title}</h2>
            <h3 className="completion-time">
               {`Temps de réalisation : ${work.time}`}
            </h3>
            <span className="context">{`Cadre du projet : ${work.type}`}</span>
            <p className="description">{work.intro}</p>

            <section className="gallery">
               <div className="gallery-content">
                  {work.gallery.map((image, index) => (
                     <div className="image" key={`${image}-${index}`}>
                        <img src={image} alt="" />
                     </div>
                  ))}
               </div>
            </section>

            <span className="tools">{`Réalisé avec : ${work.techs}`}</span>
         </article>
      </main>
   );
};

export default Work;
