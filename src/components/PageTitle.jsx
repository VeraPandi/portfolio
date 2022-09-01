import React from "react";

const PageTitle = ({ title, text, underline, labelText }) => {
   return (
      <section className="title">
         <h1 className={text} aria-label={labelText}>
            {title}
         </h1>
         <span className={underline}></span>
      </section>
   );
};

export default PageTitle;
