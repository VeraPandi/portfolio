import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Tags = ({ array }) => {
   const { theme } = useContext(ThemeContext);

   // Sort strings with accent in alphabetical order
   array.sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));

   return (
      <div className="tags" data-cy="tags">
         <ul>
            {array.map((element, index) => (
               <li
                  className={`tag ${theme}`}
                  key={`${element}-${index}`}
                  lang="en"
               >
                  {element}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Tags;
