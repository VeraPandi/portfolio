import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";

const Projects = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <main className="page-main">
         <PageTitle
            title="Projets"
            text={`title-text ${theme}`}
            underline={`underline ${theme}`}
            labelText="Liste des projets"
         />
         <Card />
      </main>
   );
};

export default Projects;
