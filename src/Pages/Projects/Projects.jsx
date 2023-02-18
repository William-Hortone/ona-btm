import React from "react";
import { HeadImage, Consultation } from "../../components";
import { SectionProject } from "../../containers";
import images from "../../constants/images";
import "./projects.css";

const Projects = () => {
  return (
    <div className="app__projects">
      <HeadImage title="Projects" img={images.building2} />
      <h2>Projets Recent</h2>
      <SectionProject />
      <Consultation />
    </div>
  );
};

export default Projects;
