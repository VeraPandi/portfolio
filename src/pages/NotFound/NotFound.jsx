import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const NotFound = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <div className="notFound">
         <main className={`notFound-main ${theme}`}>
            <div className="notFound-content">
               <span className={`error-code ${theme}`}>404</span>
               <h1 className={`error-message ${theme}`}>
                  Oups ! La page que vous recherchez semble introuvable...
               </h1>
            </div>
         </main>
      </div>
   );
};

export default NotFound;
