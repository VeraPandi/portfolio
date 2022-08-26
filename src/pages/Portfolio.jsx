import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";

const Portfolio = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <main className="page-main">
         <PageTitle
            title="Portfolio"
            text={`title-text ${theme}`}
            underline={`underline ${theme}`}
         />
         <Card />
      </main>
   );
};

export default Portfolio;
