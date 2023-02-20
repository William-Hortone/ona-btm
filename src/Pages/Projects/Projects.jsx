import React from "react";
import { HeadImage, Consultation } from "../../components";
import { SectionProject } from "../../containers";
import images from "../../constants/images";
import { motion } from "framer-motion";
import "./projects.css";

const Projects = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ Scale: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="app__projects"
    >
      <HeadImage title="Projects" img={images.building2} />
      <h2>Projets Recent</h2>
      <SectionProject />
      <Consultation />
    </motion.div>
  );
};

export default Projects;
