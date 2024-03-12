import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const iconClasses = ` ${isOpen ? "open" : ""}`;

  const iconStyle = {
    display: isOpen ? "block" : "none",
    transition: "display 0.8s ease",
  };

  return (
    <header>
      <div className="header_content">
        <div className="logoname" onClick={scrollToTop}>
          <img
            src={"https://avatar.iran.liara.run/public/girl?username=sanaahsam"} //your profile picture or avatar img link
            alt="pfp"
          />

          <Link to="home" smooth={true} duration={500} className="btn-main">
            Sana Ahsam
          </Link>
        </div>

        <ul className="main_content">
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
        {/*--------mobile navbar------- */}
        <div className={iconClasses} id="icon" onClick={handleIconClick}>
          <div className="bar1 "></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <ul className="mobile-main_content" style={iconStyle}>
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
