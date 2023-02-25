import React from "react";
import { HeadImage, Consultation } from "../../components";
import { SectionProject, Footer } from "../../containers";
import { images } from "../../constants";
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
      <HeadImage title="Projects" img={images.building9} />
      <h2> Nos Projets Récents</h2>
      <SectionProject />
      <Consultation />
      <div className="footer__container">
        <Footer />
      </div>
    </motion.div>
  );
};

export default Projects;
