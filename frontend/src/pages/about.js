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
              Hello, I'm Sana Ahsam, a Beginner MERN stack Developer and an
              enthusiastic learner, currently navigating the final year of my
              BCA degree. In my journey through the dynamic field of web
              development, I've crafted 2-3 MERN stack projects, each
              representing a milestone in my learning curve.
            </p>
            <p>
              As a dedicated student and developer, I thrive on challenges,
              consistently pushing the boundaries of my skills to create
              meaningful and innovative solutions. I am passionate about the
              endless possibilities in the tech world and look forward to
              contributing my expertise to future projects and collaborative
              endeavors. If you want to Contact Me you can Contact Me anytime.
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
