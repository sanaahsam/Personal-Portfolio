import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";

const ContactSidebar = () => {
  const GithubLink = "https://github.com/sanaahsam"; //your Github Account Link
  const LinkedinAccountLink =
    "https://www.linkedin.com/in/sana-ahsam-738831262/"; //your Linkedin Account Link
  const TwitterLink = "https://twitter.com/sanaahsam"; //your Twitter Account Link
  const Upwork = "https://www.upwork.com/freelancers/~0171d8a6fc177259b2"; //your upwork Account Link
  return (
    <div className="sidebar">
      <div className="iconn">
        <a href={LinkedinAccountLink} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
      </div>
      <div className="iconn">
        <a href={GithubLink} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
      </div>
      <div className="iconn">
        <a href={TwitterLink} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2xl" />
        </a>
      </div>
      <div className="iconn">
        <a href={Upwork} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faUpwork} size="2xl" />
        </a>
      </div>
    </div>
  );
};

export default ContactSidebar;
