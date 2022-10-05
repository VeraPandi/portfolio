import Mode from "../containers/Mode";
import Navigation from "../containers/Navigation";
import { GrAccessibility } from "react-icons/gr";

const Header = () => {
   return (
      <header className="header">
         <div
            className="website-settings"
            aria-label="Changer les paramètres visuels du site"
         >
            <Mode />

            {/* <button
               className="animation-settings-btn"
               aria-label="Désactiver les animations"
            >
               <GrAccessibility />
            </button> */}
         </div>
         <Navigation />
      </header>
   );
};

export default Header;
