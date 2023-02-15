import React from "react";
import "./description.css";
import { images } from "../../constants/images";
import { HeadText, CardImage } from "../../components";

const Description = () => {
  return (
    <div className="app__description section__padding">
      <div className="app__description-left-box">
        <HeadText title="Welcome To The Concrete Constructions" />
        <h2>Where We Build Your Visions</h2>
        <p>
          Write a warm welcoming message for visitors.You can mention all the
          benefits or services with some real examples. You can also state how
          you emphasize on their well being. This often shows your concern and
          increases the chances of conversion. Tell people a little more to
          attract.You can mention some contact details as shown below to get in
          touch with visitors.
        </p>
        <div className="app__description-contact_info">
          <p>Call Us Today</p>
          <p>91 123-456-7890</p>
        </div>
      </div>
      <div className="app__description-right-box"></div>
    </div>
  );
};

export default Description;
