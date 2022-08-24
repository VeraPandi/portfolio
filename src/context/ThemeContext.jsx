import React, { createContext, useState, useEffect } from "react";

/**
 * Creates a "dark/light" display context activated by the mode button
 * @const {string} theme - Initial mode name
 * @return {object} - "dark/light" display context
 */

export const ThemeContext = createContext(null);

const ThemeContextProvider = (props) => {
   const [theme, setTheme] = useState("darkMode");

   const toggleTheme = () => {
      setTheme(theme === "darkMode" ? "lightMode" : "darkMode");
   };

   useEffect(() => {
      document.documentElement.setAttribute("class", theme);
      localStorage.setItem("theme", theme);
   }, [theme]);

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {props.children}
      </ThemeContext.Provider>
   );
};

export default ThemeContextProvider;
