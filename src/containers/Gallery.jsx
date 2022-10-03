import React from "react";
import { worksList } from "../datas/works";

/**
 * Displays a gallery
 * @property {string} theme - Initial mode name
 * @property {object} object - Project object having the same ID as the ID retrieved in the URL parameters
 * @const {array} arrayImages - Images of this project
 * @return {JSX.Element} - Gallery
 */

// const Gallery = ({ object, theme }) => {
const Gallery = () => {
   //    const arrayImages = object.gallery.map((element) => element);
   //    console.log(worksList);

   const arrayImages = worksList.map((element) => element.gallery);

   //    if (arrayImages) {
   //       console.log(arrayImages);
   //    }

   //    const gal = arrayImages.map((element) => element.gallery);

   return (
      <section className="gallery" tabIndex={0}>
         {/* <h2 className={`gallery-title ${theme}`}>Galerie</h2>
         <div className="gallery-content">
            {arrayImages.map((element, index) => (
               <div className="row-images" key={`${element}-${index}`}>
                  {element.images.map((image, index) => (
                     <img key={index} src={image} alt="" />
                  ))}
               </div>
            ))}
         </div> */}
      </section>
   );
};

export default Gallery;
