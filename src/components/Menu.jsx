import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TbMenu } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import Link from "./Link";

/**
 * Displays a menu
 * @const {string} theme - Current mode name
 * @const {boolean} isOpen - If "true", the menu is open
 * @return {JSX.Element} - Menu
 */

const Menu = () => {
   const { theme } = useContext(ThemeContext);
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav className="menu-wrapper">
         <button
            className={`menu-open-btn ${theme}`}
            onClick={() => setIsOpen(!isOpen)}
         >
            <TbMenu />
         </button>

         <div className={isOpen ? `menu active ${theme}` : `menu ${theme}`}>
            <button
               className={
                  isOpen
                     ? `menu-close-btn ${theme} active`
                     : `menu-close-btn ${theme}`
               }
               onClick={() => setIsOpen(!isOpen)}
            >
               <MdClose />
            </button>

            <div className="menu-content">
               <Link
                  path="/"
                  className={`link home ${theme}`}
                  name="Accueil"
                  onClick={() => setIsOpen(!isOpen)}
               />
               <Link
                  path="/Projects"
                  className={`link portfolio ${theme}`}
                  name="Projets"
                  onClick={() => setIsOpen(!isOpen)}
               />
               <Link
                  path="/About"
                  className={`link about ${theme}`}
                  name="À propos"
                  onClick={() => setIsOpen(!isOpen)}
               />
            </div>
         </div>
      </nav>
   );
};

export default Menu;
