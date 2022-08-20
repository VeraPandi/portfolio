import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
   return (
      <aside className="sidebar">
         <span className="followMe">Me suivre</span>
         <div className="media-icons">
            <FaGithub className="icon" />
            <FaLinkedin className="icon" />
            <FaTwitter className="icon" />
         </div>
      </aside>
   );
};

export default Sidebar;
