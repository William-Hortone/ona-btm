import React from "react";
import "./projectsContainer.css";

const ProjectsContainer = ({ projects }) => {
  return (
    <>
      <div className="app__projectsContainer">
        {projects.map((project, index) => (
          <a href="#" className="app__projectsContainer-project">
            <article key={index}>
              <div className="project-img">
                <img src={project.img[0]} alt={project.specification} />
              </div>
              <div className="project-info">
                <div>
                  <span>{project.category}</span>
                  <span>{project.surface}</span>
                </div>
                <span className="project-title">{project.specification}</span>
              </div>
            </article>
          </a>
        ))}
      </div>
    </>
  );
};

export default ProjectsContainer;
