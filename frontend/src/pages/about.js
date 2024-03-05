import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="about">
      {/*----------------------about me------------------------- */}
      <div className="about_head">
        <h1>About Me</h1>
        <div className="about_head-line"></div>
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="about_content">
        {/*------------------------Get to know me---------------- */}
        <div className="about_content-main">
          <h3>Get to know me!</h3>
          <div className="about_content-detail">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              molestiae aliquid quam quae cum, beatae debitis ullam optio
              laborum blanditiis ratione enim iusto omnis ad illo eaque!
              Facilis, praesentium molestias.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              molestiae aliquid quam quae cum, beatae debitis ullam optio
              laborum blanditiis ratione enim iusto omnis ad illo eaque!
              Facilis, praesentium molestias.
            </p>
          </div>
          <button>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn-main"
            >
              Contact Me
            </Link>
          </button>
        </div>

        {/*--------------------------Skilss------------------------ */}
        <div className="about_content-skills">
          <h3>My Skills</h3>
          <div className="skills">
            <div className="skills_skill">HTML</div>
            <div className="skills_skill">CSS</div>
            <div className="skills_skill">JavaScript</div>
            <div className="skills_skill">React</div>

            <div className="skills_skill">Node Js</div>
            <div className="skills_skill">Mongo DB</div>
            <div className="skills_skill">Git</div>
            <div className="skills_skill">GitHub</div>
            <div className="skills_skill">Responsive Design</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
