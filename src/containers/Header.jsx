import Mode from "../containers/Mode";
import Navigation from "../containers/Navigation";

const Header = () => {
   return (
      <header className="header">
         <Mode />
         <Navigation />
      </header>
   );
};

export default Header;
