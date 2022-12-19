import React, { useContext, useState } from "react";
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

   /**
    * Displays a button to go to a section on the page
    * @const {number} positionY - Initial vertical position equal to 0
    * @function setPositionY - Get the vertical position after the button event
    * @function goToMain - Sets the vertical position of the "main" section
    * @return {JSX.Element} - button
    */

   const [positionY, setPositionY] = useState(0);

   const goToMain = (e) => {
      window.scrollTo({
         top: 865,
         left: 0,
         behavior: "smooth",
      });

      setPositionY(e.clientY);
   };

   return (
      <main className="home-page main">
         <section className="main-top" aria-label="Information sur l'auteur">
            <Cover />
            <Intro />
         </section>

         <GoToSectionBtn
            className={`goToMain-btn ${theme}`}
            dataCy={positionY}
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
