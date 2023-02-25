import React, { useState } from "react";
import { Category, ProjectsContainer } from "../../components";
import items from "../../constants/data";
import "./sectionProject.css";

const SectionProject = () => {
  const [projects, SetProjects] = useState(items);

  const handleFilterProjects = (category) => {
    if (category === "all") {
      SetProjects(items);
      return;
    }
    const projectFilted = items.filter((item) => category === item.category);
    SetProjects(projectFilted);
  };

  return (
    <div className="app__sectionProject">
      <div className="app__sectionProject-left-box">
        <Category handleFilterProjects={handleFilterProjects} />
      </div>
      <div className="app__sectionProject-right-box">
        <ProjectsContainer
          projects={projects}
          handleFilterProjects={handleFilterProjects}
        />
      </div>
    </div>
  );
};

export default SectionProject;
