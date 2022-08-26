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

const Project = () => {
   const { theme } = useContext(ThemeContext);

   const { ID } = useParams();
   const work = worksList.find((element) => element.id === ID);

   return (
      <main className="page-main">
         <PageTitle
            title="Projets"
            text={`title-text ${theme}`}
            underline={`underline ${theme}`}
         />
         {work.intro}
      </main>
   );
};

export default Project;
