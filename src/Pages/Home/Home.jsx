import React from "react";
import images from "../../constants/images";
import { Header, Description } from "../../containers";
const Home = () => {
  return (
    <div className="app__homePage">
      <Header />
      <Description />
    </div>
  );
};

export default Home;
