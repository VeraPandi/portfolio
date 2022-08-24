import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ path, className, name, onClick }) => {
   return (
      <NavLink to={path} className={className} onClick={onClick}>
         {name}
      </NavLink>
   );
};

export default Link;
