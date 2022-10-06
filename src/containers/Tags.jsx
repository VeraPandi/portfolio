import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { skills } from "../datas/tags";

const Tags = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <div className="tags">
         <ul>
            {skills.map((element, index) => (
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
