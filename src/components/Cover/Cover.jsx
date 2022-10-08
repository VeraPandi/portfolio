import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Cover = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <div className={`cover-wrapper ${theme}`}>
         <div className="cover"></div>
      </div>
   );
};

export default Cover;
