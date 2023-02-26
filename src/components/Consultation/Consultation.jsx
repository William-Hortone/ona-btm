import React, { useEffect } from "react";
import "./consultation.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const Consultation = () => {
  return (
    <div className="app__consultation">
      <div className="app__consultation-container">
        <span />
        <h1>Prendre Un Rendez-Vous Gratuitement</h1>
        <p>
          Vous avez une idée de projet ou vous souhaitez avoir plus <br />
          d'information sur nos services, contactez-nous.
        </p>
        <Link to="/contact">
          <button type="button" className="custom__button">
            Prendre Rendez-Vous
          </button>
        </Link>
        <div />
      </div>
    </div>
  );
};

export default Consultation;
