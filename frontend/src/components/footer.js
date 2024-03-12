import { useState, useEffect } from "react";

import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentYear(new Date().getFullYear()),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  const LinkedinAccountLink =
    "https://www.linkedin.com/in/sana-ahsam-738831262/"; //your Linkedin Account Link
  const GithubLink = "https://github.com/sanaahsam"; //your Github Account Link
  const TwitterLink = "https://twitter.com/sanaahsam"; //your Twitter Account Link
  const Upwork = "https://www.upwork.com/freelancers/~0171d8a6fc177259b2";

  return (
    <footer>
      <div className="footer-container">
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
              <a href={Upwork}>
                <FontAwesomeIcon icon={faUpwork} size="2xl" />
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
      </div>
    </footer>
  );
};

export default Footer;
