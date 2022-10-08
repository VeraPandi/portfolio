import Mode from "../Mode/Mode";
import Navigation from "../Navigation/Navigation";

const Header = () => {
   return (
      <header className="header" aria-label="Bannière principale">
         <Mode />
         <Navigation />
      </header>
   );
};

export default Header;
