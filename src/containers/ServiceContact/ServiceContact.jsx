import React from "react";
import "./serviceContact.css";
import images from "../../constants/images";

const ServiceContact = () => {
  return (
    <div className="app__serviceContact">
      <div className="app__serviceContact-left-box">
        <h2>
          Vous souhaitez travailler avec nous? <br /> Contactez-nous pour
          entamer une conversation.
        </h2>
        <a href="/contact">
          <span className="span"> Contactez-nous</span>
          {/* <span className="span" /> */}
        </a>
      </div>
      <div className="app__serviceContact-right-box">
        <div className="app__serviceContact-right-box_img1">
          <img src={images.place1} alt="images office" />
        </div>
        <div className="app__serviceContact-right-box_img2">
          <img src={images.place2} alt="images office" />
        </div>
      </div>
    </div>
  );
};

export default ServiceContact;
