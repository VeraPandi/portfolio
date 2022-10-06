import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="footer">
         <span className="followMe">Me suivre</span>
         <div
            className="media-icons"
            aria-label="Me suivre sur les réseaux sociaux"
         >
            <a
               className="github-link"
               aria-label="GitHub"
               href="https://github.com/VeraPandi"
               target="_blank"
               lang="en"
            >
               <FaGithub className="icon" />
            </a>

            <a
               className="linkedin-link"
               aria-label="LinkedIn"
               href="https://www.linkedin.com/in/v-l-28bbab24a/"
               target="_blank"
               lang="en"
            >
               <FaLinkedin className="icon" />
            </a>
         </div>
      </footer>
   );
};

export default Footer;
