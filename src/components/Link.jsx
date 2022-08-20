import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ path, className, name }) => {
   return (
      <NavLink to={path} className={className}>
         {name}
      </NavLink>
   );
};

export default Link;
