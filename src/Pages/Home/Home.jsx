import React from "react";
// import images from "../../constants/images";
import {
  Header,
  Description,
  Specialization,
  RecentProjects,
} from "../../containers";
import { Consultation } from "../../components";

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
