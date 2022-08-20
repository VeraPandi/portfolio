import React from "react";
import Link from "../components/Link";
import Mode from "../components/Mode";
import Menu from "../components/Menu";

const Navigation = () => {
   return (
      <nav className="nav">
         <div className="nav-content-left">
            <Link path="/" className="link home" name="HOME" />
         </div>

         <div className="nav-content-right">
            <Mode />
            <Menu />
         </div>
      </nav>
   );
};

export default Navigation;
