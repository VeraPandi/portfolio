import { usePhrase } from "../../hooks/usePhrase";

// Array of phrases to display
const phrases = ["JavaScript", "React"];

/**
 * Displays a typewriter
 * @const {string} currentPhrase - Characters currently displayed on the page
 * @const {string} selectedPhrase - Phrase that should be displayed on the page
 * @return {JSX.Element} - typewriter
 */

const TypeWriter = () => {
   const { currentPhrase, selectedPhrase } = usePhrase(phrases);

   return (
      <h2 className="typewriter">
         <span className="typewriter-title-one">Je suis développeuse </span>
         <span
            className={
               selectedPhrase && `typewriter-title-two color-${selectedPhrase}`
            }
            aria-label="JavaScript React"
            lang="en"
         >
            {currentPhrase}
         </span>
      </h2>
   );
};

export default TypeWriter;
