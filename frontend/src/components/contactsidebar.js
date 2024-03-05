import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // or "@fortawesome/free-regular-svg-icons"

const ContactSidebar = () => {
  const LinkedinAccountLink = ""; //your Linkedin Account Link
  const GithubLink = ""; //your Github Account Link
  const TwitterLink = ""; //your Twitter Account Link
  const Email = ""; //your Email Address
  return (
    <div className="sidebar">
      <div className="iconn">
        <a href={LinkedinAccountLink}>
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
      </div>
      <div className="iconn">
        <a href={GithubLink}>
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
      </div>
      <div className="iconn">
        <a href={TwitterLink}>
          <FontAwesomeIcon icon={faTwitter} size="2xl" />
        </a>
      </div>
      <div className="iconn">
        <a href={Email}>
          <FontAwesomeIcon icon={faEnvelope} size="2xl" />
        </a>
      </div>
    </div>
  );
};

export default ContactSidebar;
