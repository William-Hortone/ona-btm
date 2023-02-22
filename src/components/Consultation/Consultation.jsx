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
          Vous avez une idée de projet ou vous souhaitez avoir plus <br />
          d'information sur nos services, contactez-nous.
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
