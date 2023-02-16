import React from "react";
import { HeadImage, Consultation } from "../../components";
import images from "../../constants/images";
import { Story, Team } from "../../containers";

const About = () => {
  return (
    <div className="app__about">
      <HeadImage title="A Propos" img={images.building7} />
      <Story />
      <Team />
      <Consultation />
    </div>
  );
};

export default About;
