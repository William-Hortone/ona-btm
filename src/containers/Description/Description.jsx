import React from "react";
import "./description.css";
import images from "../../constants/images";
import { HeadText, CardImage } from "../../components";

const Description = () => {
  return (
    <div className="app__description section__padding">
      <div className="app__description-left-box">
        <HeadText title="Welcome To The Concrete Constructions" />
        <h2>Où nous construisons vos visions</h2>
        <p>
          Write a warm welcoming message for visitors.You can mention all the
          benefits or services with some real examples. You can also state how
          you emphasize on their well being. This often shows your concern and
          increases the chances of conversion. Tell people a little more to
          attract.You can mention some contact details as shown below to get in
          touch with visitors.
        </p>
        <div className="app__description-contact_info">
          <p>Appelez-Nous Dès Aujourd'hui</p>
          <p> +33 695469273 / +241 077761684</p>
        </div>
      </div>
      <div className="app__description-right-box">
        <CardImage img={images.building11} />
      </div>
    </div>
  );
};

export default Description;
