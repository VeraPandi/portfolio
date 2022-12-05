import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Tags = ({ array }) => {
   const { theme } = useContext(ThemeContext);

   return (
      <div className="tags" data-cy="tags">
         <ul>
            {array.sort().map((element, index) => (
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
