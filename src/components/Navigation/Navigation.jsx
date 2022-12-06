import Link from "../Link/Link";

const Navigation = () => {
   return (
      <nav className="navigation" data-cy="navigation">
         <Link path="/" className="link home-link" name="ACCUEIL" />
         <Link path="/Projects" className="link projects-link" name="PROJETS" />
      </nav>
   );
};

export default Navigation;
