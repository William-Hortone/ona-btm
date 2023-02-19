import React from "react";
import { Consultation } from "../../components";
import {
  Header,
  Description,
  Specialization,
  RecentProjects,
} from "../../containers";

import { motion as m } from "framer-motion";
import "./home.css";

const Home = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="app__homePage"
    >
      <Header />
      <Description />
      <Consultation />
      <Specialization />
      <RecentProjects />
    </m.div>
  );
};

export default Home;
