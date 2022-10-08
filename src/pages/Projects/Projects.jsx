import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { worksList } from "../../datas/works";
import PageTitle from "../../components/PageTitle/PageTitle";
import Card from "../../components/Card/Card";

const Projects = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <main className="projects-page main">
         <PageTitle title="Projets" text={`page-title-text ${theme}`} />
         <Card array={worksList} />
      </main>
   );
};

export default Projects;
