import React from "react";
import { HeadImage, Consultation } from "../../components";
import { Story, Team, Footer, Navbar } from "../../containers";
import images from "../../constants/images";
import { motion } from "framer-motion";
import "./about.css";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ Scale: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="app__about"
    >
      <Navbar />
      <HeadImage title="A Propos" img={images.building7} />
      <Story />
      <Team />
      <div className="team-presentation">
        <div className="team-presentation-box">
          <img src={images.team2} alt="" />
        </div>
      </div>
      <Consultation />
      <Footer />
    </motion.div>
  );
};

export default AboutPage;
