import { useEffect, useState } from "react";

/**
 * Get the current phrase displayed in a typewriter
 * @param {array} phrases - Array of phrases to display
 * @param {string} selectedPhrase - Phrase that should be displayed on the page
 * @const {string} currentPhrase - Characters currently displayed on the page
 * @const {string} nextRemaining - Next phrase remaining
 * @const {string} nextPhrase - Next phrase
 * @const {number} index - Current phrase index
 * @const {number} nextIndex - Index given to the next phrase
 * @const {string} step - Phrase processing phases (writing or pausing or deleting)
 * @const {object} stepTypes - Types of phrase processing steps (Properties : writing, pausing, deleting)
 * @method timeout - Timer that updates the phrase display after a time specified with a constant
 * @return {string} - phrase
 */

export const stepTypes = {
   writing: "writing",
   pausing: "pausing",
   deleting: "deleting",
};

const WRITING_INTERVAL = 100;
const WRITING_PAUSE = 1500;
const DELETING_INTERVAL = 40;
const DELETING_PAUSE = 300;

export const usePhrase = (phrases) => {
   const [index, setIndex] = useState(0);
   const [step, setStep] = useState(stepTypes.writing);
   const [currentPhrase, setCurrentPhrase] = useState("");

   useEffect(() => {
      switch (step) {
         // -------- Sets phrase display -------- //
         case stepTypes.writing: {
            // We define the next phrase to display
            const nextPhrase = phrases[index].slice(
               0,
               currentPhrase.length + 1
            );

            // Then, when all the characters of the phrase are displayed on the page, we define a pause
            if (nextPhrase === currentPhrase) {
               setStep(stepTypes.pausing);
            }

            // Here, we define the writing speed of the phrase to display
            const timeout = setTimeout(() => {
               setCurrentPhrase(nextPhrase);
            }, WRITING_INTERVAL);

            return () => clearTimeout(timeout);
         }

         // -------- Sets sentence deletion -------- //
         case stepTypes.deleting: {
            // If the phrase is not being written
            if (!currentPhrase) {
               const timeout = setTimeout(() => {
                  // We define the index of the next phrase to display
                  const nextIndex = index + 1;

                  // Then, we replace the phrase index and change the type of phrase processing step
                  setIndex(phrases[nextIndex] ? nextIndex : 0);
                  setStep(stepTypes.writing);
               }, DELETING_PAUSE);

               return () => clearTimeout(timeout);
            }

            // Here, we define the remaining characters of the displayed phrase
            const nextRemaining = phrases[index].slice(
               0,
               currentPhrase.length - 1
            );

            // Here, we define the character deletion speed
            const timeout = setTimeout(() => {
               setCurrentPhrase(nextRemaining);
            }, DELETING_INTERVAL);

            return () => clearTimeout(timeout);
         }

         // -------- Defines the pause time before deleting the phrase -------- //
         case stepTypes.pausing:
         default:
            const timeout = setTimeout(() => {
               setStep(stepTypes.deleting);
            }, WRITING_PAUSE);

            return () => clearTimeout(timeout);
      }
   }, [phrases, currentPhrase, index, step]);

   return {
      currentPhrase,
      step,
      selectedPhrase: phrases[index],
   };
};
