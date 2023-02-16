import React from "react";
import { Consultation } from "../../components";
import {
  Header,
  Description,
  Specialization,
  RecentProjects,
} from "../../containers";

const Home = () => {
  return (
    <div className="app__homePage">
      <Header />
      <Description />
      <Consultation />
      <Specialization />
      <RecentProjects />
    </div>
  );
};

export default Home;
