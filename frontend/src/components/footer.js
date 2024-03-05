import { useState, useEffect } from "react";

import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentYear(new Date().getFullYear()),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  const LinkedinAccountLink = ""; //your Linkedin Account Link
  const GithubLink = ""; //your Github Account Link
  const TwitterLink = ""; //your Twitter Account Link
  const Email = ""; //your Email Address

  return (
    <footer>
      <div className="foot-head">
        <h1>Social</h1>
        <div className="footer-sidebar">
          <div className="foot-iconn">
            <a href={LinkedinAccountLink}>
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>
          </div>
          <div className="foot-iconn">
            <a href={GithubLink}>
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </a>
          </div>
          <div className="foot-iconn">
            <a href={TwitterLink}>
              <FontAwesomeIcon icon={faTwitter} size="2xl" />
            </a>
          </div>
          <div className="foot-iconn">
            <a href={Email}>
              <FontAwesomeIcon icon={faEnvelope} size="2xl" />
            </a>
          </div>
        </div>
      </div>

      <ul className="menu">
        <li>
          <Link to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="project" smooth={true} duration={500}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      <div className="copyright">
        Copyright &copy;{currentYear}.Made by{" "}
        <a href="www.sanatech.com">Sana Ahsam</a>
      </div>
    </footer>
  );
};

export default Footer;
