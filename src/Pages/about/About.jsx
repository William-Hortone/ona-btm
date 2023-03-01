import React from "react";
import { HeadImage, Consultation } from "../../components";
import { Story, Team, Footer } from "../../containers";
import images from "../../constants/images";
import { motion } from "framer-motion";
import "./about.css";

const About = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ Scale: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="app__about"
    >
      <HeadImage title="A Propos" img={images.building7} />
      <Story />
      <Team />
      <Consultation />
      <Footer />
    </motion.div>
  );
};

export default About;
