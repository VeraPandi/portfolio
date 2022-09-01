import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { worksList } from "../datas/works";
import PageTitle from "../components/PageTitle";
import Gallery from "../components/Gallery";
/**
 * Displays a page for each project
 * @const {string} theme - Initial mode name
 * @const {string} ID - Page ID
 * @const {object} work - Project object having the same ID as the ID retrieved in the URL parameters
 * @const {array} worksList - Datas
 * @return {JSX.Element} - Page
 */

const Work = () => {
   const { theme } = useContext(ThemeContext);
   const { ID } = useParams();
   const work = worksList.find((element) => element.id === ID);

   return (
      <main className="page-main project">
         <PageTitle
            title={`Projet ${work.id}`}
            text={`title-text ${theme}`}
            labelText={`Projet ${work.id}`}
            underline={`underline ${theme}`}
         />

         <article role="document" aria-label={work.title}>
            <section className="project-introduction">
               <h2 className={`project-title ${theme}`}>{work.title}</h2>
               <div className="project-picture">
                  <img src={work.cover} alt="" />
               </div>

               <section className={`project-infos ${theme}`}>
                  <div className="completion">
                     <span
                        className="completion-time"
                        aria-label={`Temps de réalisation : ${work.time} semaines`}
                     >
                        Temps de réalisation :
                     </span>
                     <span className="completion-time-number">{work.time}</span>
                     <span className="completion-time-text"> semaines</span>
                  </div>

                  <div
                     className="context"
                     aria-label={`Cadre du projet : ${work.type}`}
                  >
                     <span className="context-text">Cadre du projet :</span>
                     <span className="context-type">{work.type}</span>
                  </div>
               </section>

               <p className={`description ${theme}`}>{work.intro}</p>

               <span
                  className={`techs-tags ${theme}`}
               >{`Réalisé avec : ${work.techs.join(", ")}`}</span>
            </section>

            <Gallery object={work} theme={theme} />

            <div className={`view-more ${theme}`}>
               {work.urlDemo !== undefined && (
                  <a
                     href={work.urlDemo}
                     className={`link demo-link ${theme}`}
                     target="blank"
                     rel="noreferrer"
                  >
                     Démo
                  </a>
               )}

               {work.urlGithub !== undefined && (
                  <a
                     href={work.urlGithub}
                     className={`link github-link ${theme}`}
                     target="blank"
                     rel="noreferrer"
                  >
                     GitHub
                  </a>
               )}
            </div>
         </article>
      </main>
   );
};

export default Work;
