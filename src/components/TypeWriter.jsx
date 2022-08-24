import React from "react";
import { usePhrase } from "../hooks/usePhrase";

/**
 * Displays a typewriter
 * @const {string} selectedPhrase - Phrase that should be displayed on the page
 * @const {string} currentPhrase - Phrase currently displayed on the page
 * @return {JSX.Element} - typewriter
 */

// Array of phrases to display
const phrases = ["JavaScript", "React"];

const TypeWriter = () => {
   const { currentPhrase, selectedPhrase } = usePhrase(phrases);

   return (
      <h2 className="typewriter">
         <span className="typewriter-title-one">Je suis développeuse </span>
         <span
            className={
               selectedPhrase && `typewriter-title-two color-${selectedPhrase}`
            }
            aria-label={selectedPhrase}
         >
            {currentPhrase}
         </span>
      </h2>
   );
};

export default TypeWriter;
