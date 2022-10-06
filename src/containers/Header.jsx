import Mode from "../containers/Mode";
import Navigation from "../containers/Navigation";

const Header = () => {
   return (
      <header className="header" aria-label="Bannière principale">
         <Mode />
         <Navigation />
      </header>
   );
};

export default Header;
