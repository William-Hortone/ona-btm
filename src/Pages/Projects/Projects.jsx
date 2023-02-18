import React, { useState } from "react";
import { HeadImage, HeadText, ProjectImg, Category } from "../../components";
import { SectionProject } from "../../containers";
import images from "../../constants/images";
import items from "../../constants/data";

const Projects = () => {
  // const [projects, SetProjects] = useState(items);

  // const handleFilterProjects = (category) => {
  //   if (category === "all") {
  //     SetProjects(items);
  //     return;
  //   }
  //   const projectFilted = items.filter((item) => category === item.category);
  //   SetProjects(projectFilted);
  // };

  return (
    <div className="app__projects">
      <HeadImage title="Projects" img={images.building2} />
      <SectionProject />
    </div>
  );
};

export default Projects;
