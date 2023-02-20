import React, { useEffect } from "react";
import "./consultation.css";
import images from "../../constants/images";
import { Parallax } from "react-parallax";
import AOS from "aos";
import "aos/dist/aos.css";

const Consultation = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="app__consultation">
      <div className="app__consultation-container">
        <span />
        <h1>Prendre Un Rendez-Vous Gratuitement</h1>
        <p>
          You can use these sections to highlight the features of heading. Use
          these paragraphs <br /> to focus on the topic you want. Make sure you
          keep it short and attractive.
        </p>
        <a href="/contact" data-aos="zoom-out-up">
          <button type="button" className="custom__button">
            Rendez-vous
          </button>
        </a>
        <div />
      </div>
    </div>
  );
};

export default Consultation;
