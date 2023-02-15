import React from "react";
import "./consultation.css";
import images from "../../constants/images";
import { Parallax } from "react-parallax";

const Consultation = () => {
  return (
    <div className="app__consultation">
      <div className="app__consultation-container">
        <span />
        <h1>Get Your Free Consultation</h1>
        <p>
          You can use these sections to highlight the features of heading. Use
          these paragraphs <br /> to focus on the topic you want. Make sure you
          keep it short and attractive.
        </p>
        <a href="/contact">
          <button type="button" className="custom__button">
            Prendre un redez-vous
          </button>
        </a>
        <div />
      </div>
    </div>
  );
};

export default Consultation;
