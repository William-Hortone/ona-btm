import React from "react";
import { Consultation } from "../../components";
import AnimatedPage from "../../components/AnimatedPages";
import { motion } from "framer-motion";
import {
  Header,
  Description,
  Specialization,
  RecentProjects,
  Footer,
} from "../../containers";
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
      <Footer />
    </motion.div>
  );
};

export default Home;
