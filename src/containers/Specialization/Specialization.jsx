import React from "react";
import "./specialization.css";
import images from "../../constants/images";
import { CardImage, HeadText } from "../../components";
import { FaRegClone } from "react-icons/fa";

const Specialization = () => {
  return (
    <div className="app__specialization section__padding">
      <div className="app__specialization-left-box">
        <CardImage img={images.building3} />
      </div>
      <div className="app__specialization-right-box">
        <HeadText title="Our Specialization" />
        <p className="text-description">
          You can use these sections to highlight the features of heading. Use
          these paragraphs to focus on the topic you want. Make sure you keep it
          short and attractive
        </p>
        <div className="app__specialization-categories">
          <div className="app__specialization-category">
            <h3>
              <FaRegClone /> Architecture​
            </h3>
            <p>A short description to prove that you are the best.​</p>
          </div>
          <div className="app__specialization-category">
            <h3>Architecture​</h3>
            <p>A short description to prove that you are the best.​</p>
          </div>
          <div className="app__specialization-category">
            <h3>Architecture​</h3>
            <p>A short description to prove that you are the best.​</p>
          </div>
          <div className="app__specialization-category">
            <h3>Architecture​</h3>
            <p>A short description to prove that you are the best.​</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
