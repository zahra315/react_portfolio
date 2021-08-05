import React from "react";
import resume from "../assets/data/Zahra Seyedi RESUME.pdf";

const Resume = () => {
  return (
    <div className="flex bg-dark">
      <h3>Experience and Skills</h3>
      <div className="pb-5">
        <p>
          Click here to download my{" "}
          <a
            href={resume}
            rel="noreferrer"
            download="Resume"
            target="_blank"
            className="resume"
          >
            Resume
          </a>
        </p>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <h3>Proficiencies</h3>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">MongoDB</li>
            <li className="list-group-item">Express</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">Node</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
