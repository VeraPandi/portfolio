import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { worksList } from "../../datas/works";
import { skills } from "../../datas/tags";
import Cover from "../../components/Cover/Cover";
import Intro from "../../components/Intro/Intro";
import Card from "../../components/Card/Card";
import Tags from "../../components/Tags/Tags";
import PageTitle from "../../components/PageTitle/PageTitle";

const Home = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <main className="home-page main">
         <section className="main-top" aria-label="Information sur l'auteur">
            <Cover />
            <Intro />
         </section>

         <section className="main-center" data-cy="main-center">
            <PageTitle
               title="Dernier projet"
               text={`page-title-text ${theme}`}
            />
            <Card array={worksList.slice(-1)} />
         </section>

         <section className="main-bottom" data-cy="main-bottom">
            <PageTitle title="Technos" text={`page-title-text ${theme}`} />
            <Tags array={skills} />
         </section>
      </main>
   );
};

export default Home;
