import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { worksList } from "../datas/works";
import Intro from "../containers/Intro";
import Card from "../containers/Card";
import Tags from "../containers/Tags";
import PageTitle from "../components/PageTitle";

const Home = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <main className="home-page main">
         <section className="main-top" aria-label="Information sur l'auteur">
            <div className={`cover-wrapper ${theme}`}>
               <div className="cover"></div>
            </div>
            <Intro />
         </section>

         <section className="main-center">
            <PageTitle title="Dernier projet" text={`title-text ${theme}`} />
            <Card array={worksList.slice(-1)} />
         </section>

         <section className="main-bottom">
            <PageTitle title="Technos" text={`title-text ${theme}`} />
            <Tags />
         </section>
      </main>
   );
};

export default Home;
