import React from "react";

/**
 * Displays a gallery
 * @property {string} theme - Initial mode name
 * @property {object} object - Project object having the same ID as the ID retrieved in the URL parameters
 * @const {array} arrayImages - Images of this project
 * @return {JSX.Element} - Gallery
 */

const Gallery = ({ object, theme }) => {
   const arrayImages = object.gallery.map((element) => element);

   return (
      <section className="gallery" aria-label={object.title} tabIndex={0}>
         <h2 className={`gallery-title ${theme}`}>Galerie</h2>
         <div className="gallery-content">
            {arrayImages.map((element, index) => (
               <div className="row-images" key={`${element}-${index}`}>
                  {element.images.map((image, index) => (
                     <img key={index} src={image} alt="" />
                  ))}
               </div>
            ))}
         </div>
      </section>
   );
};

export default Gallery;
