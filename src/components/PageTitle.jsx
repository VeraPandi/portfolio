const PageTitle = ({ title, text }) => {
   return (
      <div className="title">
         <h3 className={text}>{title}</h3>
      </div>
   );
};

export default PageTitle;
