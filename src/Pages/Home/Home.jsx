import React from "react";
import {
  Header,
  Description,
  Specialization,
  RecentProjects,
  Footer,
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
      <Footer />
    </div>
  );
};

export default Home;
