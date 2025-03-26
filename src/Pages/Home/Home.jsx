import { motion } from "framer-motion";
import React from "react";
import { Consultation } from "../../components";
import {
  Description,
  Footer,
  RecentProjects,
  Specialization,
} from "../../containers";
import SectionHeader from "./../../containers/Header/SectionHeader";
import "./home.css";

const Home = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ Scale: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="app__homePage"
    >
      <SectionHeader />
      <Description />
      <Consultation />
      <Specialization />
      <RecentProjects />
      <Footer />
    </motion.div>
  );
};

export default Home;
