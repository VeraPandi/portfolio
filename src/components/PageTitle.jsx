const PageTitle = ({ title, text, labelText }) => {
   return (
      <div className="title">
         <h3 className={text} aria-label={labelText}>
            {title}
         </h3>
      </div>
   );
};

export default PageTitle;
