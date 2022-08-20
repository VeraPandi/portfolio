import React from "react";
import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

const Mode = () => {
   return (
      <button className="mode-btn">
         <FaMoon className="mode-btn-night" />
         <BsSun className="mode-btn-light" />
      </button>
   );
};

export default Mode;
