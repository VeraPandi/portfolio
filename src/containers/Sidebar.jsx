import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * Displays a sidebar
 * @function toggleTheme - Function switching "dark" and "light" mode
 * @const {string} theme - Current mode name
 * @return {JSX.Element} - sidebar
 */

const Sidebar = () => {
   const { toggleTheme, theme } = useContext(ThemeContext);

   return (
      <aside className={`sidebar ${theme}`}>
         <span className={`followMe ${theme}`}>Me suivre</span>
         <div className="media-icons">
            <FaGithub className="icon" />
            <FaLinkedin className="icon" />
            <FaTwitter className="icon" />
         </div>
      </aside>
   );
};

export default Sidebar;
