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
          <img src="/images/workout1.png" alt="Workout App" />
          <h3>Workout-Application</h3>
          <button>
            <a href="https://github.com/sanaahsam/Workout-Tracker-App">
              Project Code
            </a>
          </button>
        </div>
        <div className="project_card">
          <img src="/images/chatapp5.png" alt="Chat Application" />
          <h3>Chat-Application</h3>
          <button>
            <a href="https://github.com/sanaahsam/Real-Time-Chat-Application">
              Project Code
            </a>
          </button>
        </div>
        <div className="project_card">
          <img src="/images/website.png" alt="Portfolio Website" />
          <h3>Personal Portfolio</h3>
          <button>
            <a href="https://github.com/sanaahsam/Personal-Portfolio">
              Project Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
