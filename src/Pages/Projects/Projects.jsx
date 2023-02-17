import React from "react";
import { HeadImage, HeadText, ProjectImg } from "../../components";
import { SectionProject } from "../../containers";
import images from "../../constants/images";

const Projects = () => {
  return (
    <div className="app__projects">
      <HeadImage title="Projects" img={images.building2} />
      <SectionProject />
    </div>
  );
};

export default Projects;
