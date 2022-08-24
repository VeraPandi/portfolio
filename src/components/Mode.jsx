import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

/**
 * Displays a dark/light mode button
 * @function toggleTheme - Function switching "dark" and "light" mode
 * @const {string} theme - Current mode name
 * @return {JSX.Element} - Mode button
 */

const Mode = () => {
   const { toggleTheme, theme } = useContext(ThemeContext);

   return (
      <div className="mode-btn">
         {theme === "darkMode" && (
            <button className={`mode-btn-light ${theme}`} onClick={toggleTheme}>
               <BsSun />
            </button>
         )}

         {theme === "lightMode" && (
            <button className="mode-btn-dark darkMode" onClick={toggleTheme}>
               <FaMoon />
            </button>
         )}
      </div>
   );
};

export default Mode;
