import React from "react";
import Link from "./Link";

/**
 * Displays a previous/next navigation
 * @property {string} ID - Page ID
 * @property {array} array - Datas
 * @property {string} theme - Initial mode name
 * @const {number} previousElement - Previous Page ID
 * @const {number} nextElement - Next Page ID
 * @const {string} previousElementTitle - Title of previous project
 * @const {string} nextElementTitle - Title of next project
 * @return {JSX.Element} - Navigation
 */

const PrevNextNavigation = ({ ID, array, theme }) => {
   const previousElement = parseInt(ID) === 1 ? array.length : parseInt(ID) - 1;
   const nextElement = parseInt(ID) < array.length ? parseInt(ID) + 1 : 1;

   const previousElementTitle = array.find(
      (element) => element.id === previousElement.toString()
   ).title;

   const nextElementTitle = array.find(
      (element) => element.id === nextElement.toString()
   ).title;

   return (
      <nav className="next-previous">
         <div>
            Projet précédent :
            <Link
               path={`/Work/${
                  parseInt(ID) === 1 ? array.length : parseInt(ID) - 1
               }`}
               className={`link prevBtn ${theme}`}
               name={previousElementTitle}
               onClick=""
            />
         </div>

         <div>
            Projet suivant :
            <Link
               path={`/Work/${
                  parseInt(ID) < array.length ? parseInt(ID) + 1 : 1
               }`}
               className={`link nextBtn ${theme}`}
               name={nextElementTitle}
               onClick=""
            />
         </div>
      </nav>
   );
};

export default PrevNextNavigation;
