import React from "react";
import { HeadImage, Consultation } from "../../components";
import { SectionProject } from "../../containers";
import images from "../../constants/images";
import { motion as m } from "framer-motion";
import "./projects.css";

const Projects = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="app__projects"
    >
      <HeadImage title="Projects" img={images.building2} />
      <h2>Projets Recent</h2>
      <SectionProject />
      <Consultation />
    </m.div>
  );
};

export default Projects;
