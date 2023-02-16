import React from "react";
import "./story.css";
import { CardImage, HeadText, Consultation } from "../../components";
import images from "../../constants/images";
import { FaCheck } from "react-icons/fa";

const Story = () => {
  return (
    <div className="app__story section__padding">
      <div className="app__story-left-box">
        <CardImage img={images.building6} />
      </div>
      <div className="app__story-right-box">
        <HeadText title="A Propos De Nous" />
        <div className="story-description">
          <p>
            You can add here some history of your company.You can mention all
            the benefits or services with some real examples. You can also state
            how you emphasize on their well being. This often shows your concern
            and increases the chances of conversion. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
          <div className="app__story-description-items">
            <div>
              <span>
                <FaCheck />
              </span>
              <p>Professional Specialist</p>
            </div>
            <div>
              <span>
                <FaCheck />
              </span>
              <p>Brilliant Ideas</p>
            </div>
            <div>
              <span>
                <FaCheck />
              </span>
              <p>Precise Builders</p>
            </div>
            <div>
              <span>
                <FaCheck />
              </span>
              <p> 24/7 Assiatance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
