import React from "react";
import images from "../../constants/images";
import { Header, Description, Specialization } from "../../containers";
import { Consultation } from "../../components";

const Home = () => {
  return (
    <div className="app__homePage">
      <Header />
      <Description />
      <Consultation />
      <Specialization />
    </div>
  );
};

export default Home;
