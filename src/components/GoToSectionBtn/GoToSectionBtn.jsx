const GoToSectionBtn = ({ className, dataCy, event, aria, icon }) => {
   return (
      <button
         className={className}
         data-position={dataCy}
         onClick={event}
         aria-label={aria}
      >
         {icon}
      </button>
   );
};

export default GoToSectionBtn;
