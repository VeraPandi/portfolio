import TypeWriter from "../TypeWriter/TypeWriter";

const Intro = () => {
   return (
      <div className="intro">
         <h1 className="intro-title" data-cy="intro-title">
            Vera Pandi
         </h1>
         <TypeWriter />

         <p data-cy="intro-paragraph">
            Sensible au Responsive Design, UI/UX Design, au beau et au bien
            fait.
         </p>

         <p>
            J'aime créer des applications fidèles aux attentes, intégrées avec
            soin, bien écrites, documentées, testées de bout en bout et
            agréables à maintenir.
         </p>
      </div>
   );
};

export default Intro;
