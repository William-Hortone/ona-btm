import React from "react";
import { Consultation } from "../../components";
import {
  Header,
  Description,
  Specialization,
  RecentProjects,
} from "../../containers";
import AnimatedPage from "../../components/AnimatedPages";
import { motion } from "framer-motion";
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
      <Header />
      <Description />
      <Consultation />
      <Specialization />
      <RecentProjects />
    </motion.div>
  );
};

export default Home;
