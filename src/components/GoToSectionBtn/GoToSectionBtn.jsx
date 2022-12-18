const GoToSectionBtn = ({ className, event, aria, icon }) => {
   return (
      <button className={className} onClick={event} aria-label={aria}>
         {icon}
      </button>
   );
};

export default GoToSectionBtn;
