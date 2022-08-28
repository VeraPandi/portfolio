import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Link from "../components/Link";
import Mode from "../components/Mode";
import Menu from "../components/Menu";

/**
 * Displays a navigation
 * @const {string} theme - Current mode name
 * @return {JSX.Element} - navigation
 */

const Navigation = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <nav className="nav" data-theme="darkMode">
         <div className={`nav-content-left ${theme}`}>
            <Link path="/" className="link home" name="ACCUEIL" onClick="" />
         </div>

         <div className={`nav-content-right ${theme}`}>
            <Mode />
            <Menu />
         </div>
      </nav>
   );
};

export default Navigation;
