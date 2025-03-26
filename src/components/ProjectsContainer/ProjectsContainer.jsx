import React from "react";
import { Link } from "react-router-dom";
import "./projectsContainer.css";

const ProjectsContainer = ({ projects }) => {
  return (
    <>
      <div className="app__projectsContainer">
        {projects.map((project, index) => (
          <Link
            to={project.link}
            key={index}
            className="app__projectsContainer-project"
          >
            <article>
              <div className="project-img">
                <img src={project.img[0]} alt={project.specification} />
                <span />
              </div>
              <div className="project-info">
                <div>
                  <span className="text-black">{project.category}</span>
                  <span className="text-black">{project.surface}</span>
                </div>
                <span className="text-black project-title">
                  {project.specification}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProjectsContainer;
