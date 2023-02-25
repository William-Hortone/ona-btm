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
  // const routeVariants = {
  //   hidden: {
  //     opacity: 0,
  //     x: -100,
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //   },
  //   exit: {
  //     opacity: 0,
  //     x: 100,
  //   },
  // };

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ Scale: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      // initial="hidden"
      // animate="visible"
      // exit="exit"
      // variants={routeVariants}
      // transition={{ duration: 0.5 }}
      className="app__homePage"
    >
      <Header />
      <Description />
      <Consultation />
      <Specialization />
      <RecentProjects />
      <div className="footer__container">
        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
