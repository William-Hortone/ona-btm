import React from "react";
import { HeadImage, Consultation } from "../../components";
import images from "../../constants/images";
import { Story, Team } from "../../containers";
import { motion as m } from "framer-motion";

import "./about.css";

const About = () => {
  return (
    <div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 0.75, ease: "easeOut" }}
      className="app__about"
    >
      <HeadImage title="A Propos" img={images.building7} />
      <Story />
      <Team />
      <Consultation />
    </div>
  );
};

export default About;
