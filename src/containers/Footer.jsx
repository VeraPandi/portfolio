import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="footer">
         <span className="followMe">Me suivre</span>
         <div className="media-icons">
            <a
               className="github-link"
               href="https://github.com/VeraPandi"
               target="_blank"
            >
               <FaGithub className="icon" />
            </a>

            <a
               className="linkedin-link"
               href="https://www.linkedin.com/in/v-l-28bbab24a/"
               target="_blank"
            >
               <FaLinkedin className="icon" />
            </a>
         </div>
      </footer>
   );
};

export default Footer;
