import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { worksList } from "../../services/works";
import { skills } from "../../services/tags";
import Cover from "../../components/Cover/Cover";
import Intro from "../../components/Intro/Intro";
import GoToSectionBtn from "../../components/GoToSectionBtn/GoToSectionBtn";
import Card from "../../components/Card/Card";
import Tags from "../../components/Tags/Tags";
import PageTitle from "../../components/PageTitle/PageTitle";
import { AiOutlineArrowDown } from "react-icons/ai";

const Home = () => {
   const { theme } = useContext(ThemeContext);

   const goToMain = () => {
      window.scrollTo({
         top: 865,
         left: 0,
         behavior: "smooth",
      });
   };

   return (
      <main className="home-page main">
         <section className="main-top" aria-label="Information sur l'auteur">
            <Cover />
            <Intro />
         </section>

         <GoToSectionBtn
            className={`goToMain-btn ${theme}`}
            event={goToMain}
            aria="Aller au contenu principal"
            icon={<AiOutlineArrowDown />}
         />

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
