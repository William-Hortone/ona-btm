import React from "react";
import { HeadImage, Consultation } from "../../components";
import images from "../../constants/images";
import { Story, Team } from "../../containers";
import { motion as m } from "framer-motion";

import "./about.css";

const About = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="app__about"
    >
      <HeadImage title="A Propos" img={images.building7} />
      <Story />
      <Team />
      <Consultation />
    </m.div>
  );
};

export default About;
