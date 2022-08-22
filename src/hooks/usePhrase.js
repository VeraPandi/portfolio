import { useEffect, useState } from "react";

/**
 * Get the current phrase displayed in a typewriter
 * @param {array} phrases - Array of phrases to display
 * @param {string} selectedPhrase - Phrase that should be displayed on the page
 * @const {string} currentPhrase - Phrase currently displayed on the page
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
         case stepTypes.writing: {
            const nextPhrase = phrases[index].slice(
               0,
               currentPhrase.length + 1
            );

            if (nextPhrase === currentPhrase) {
               setStep(stepTypes.pausing);
            }

            const timeout = setTimeout(() => {
               setCurrentPhrase(nextPhrase);
            }, WRITING_INTERVAL);

            return () => clearTimeout(timeout);
         }

         case stepTypes.deleting: {
            if (!currentPhrase) {
               const timeout = setTimeout(() => {
                  const nextIndex = index + 1;
                  setIndex(phrases[nextIndex] ? nextIndex : 0);
                  setStep(stepTypes.writing);
               }, DELETING_PAUSE);
               return () => clearTimeout(timeout);
            }

            const nextRemaining = phrases[index].slice(
               0,
               currentPhrase.length - 1
            );

            const timeout = setTimeout(() => {
               setCurrentPhrase(nextRemaining);
            }, DELETING_INTERVAL);

            return () => clearTimeout(timeout);
         }

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
