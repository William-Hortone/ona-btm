import React from "react";
import { HeadImage, CardImage, HeadText } from "../../components";
import images from "../../constants/images";
import { Story } from "../../containers";

const About = () => {
  return (
    <div className="app__about">
      <HeadImage title="A Propos" img={images.building7} />
      <Story />
    </div>
  );
};

export default About;
