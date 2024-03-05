import React from "react";

const Project = () => {
  return (
    <div className="project">
      <div className="project_head">
        <h1>Project</h1>
        <div className="project_head-line"></div>
        <p>Here you will find projects I made so far</p>
      </div>
      <div className="project_content">
        <div className="project_card">
          <img src="/images/project.png" alt="Workout App" />
          <h3>Lorem ipsum dolor</h3>
          <button>
            <a href="http://Loremipsumdolo.com">Project Code</a>
          </button>
        </div>
        <div className="project_card">
          <img src="/images/project.png" alt="Chat Application" />
          <h3>Lorem ipsum dolor</h3>
          <button>
            <a href="http://Loremdolor.com">Project Code</a>
          </button>
        </div>
        <div className="project_card">
          <img src="/images/project.png" alt="Portfolio Website" />
          <h3>Lorem ipsum dolor</h3>
          <button>
            <a href="http://Loremipsum.com">Project Code</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
