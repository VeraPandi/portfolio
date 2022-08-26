import React from "react";

const PageTitle = ({ title, text, underline }) => {
   return (
      <section className="title">
         <h1 className={text}>{title}</h1>
         <span className={underline}></span>
      </section>
   );
};

export default PageTitle;
