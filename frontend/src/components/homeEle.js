import React from "react";
import { Link } from "react-scroll";
import ContactSidebar from "./contactsidebar";

const HomeEle = () => {
  return (
    <div className="backdrop">
      <ContactSidebar />
      <div className="introduction">
        <div className="heading">
          <h1>Hello, I'm Sana Ahsam</h1>
        </div>
        <div className="paragraph">
          <p>
            A beginner Full Stack Developer eager to explore the world of web
            development.
          </p>
        </div>
        <Link to="project" smooth={true} duration={500} className="btn-main">
          PROJECT
        </Link>
      </div>
    </div>
  );
};

export default HomeEle;
