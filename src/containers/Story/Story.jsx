import React from "react";
import "./story.css";
import { CardImage, HeadText, Consultation } from "../../components";
import images from "../../constants/images";
import { FaCheck } from "react-icons/fa";
import { motion as m } from "framer-motion";

const Story = () => {
  return (
    <div className="app__story section__padding">
      <div className="app__story-left-box">
        <CardImage img={images.office} />
      </div>
      <div className="app__story-right-box ">
        <HeadText title="A Propos De Nous" />
        <div className="story-description">
          <p>
            ONA Bâtiment est une entreprise générale de bâtiment répartie en
            trois pôles : <br />
            - Ona Conception architecturale : OCA <br />
            - Ona Bureau d’études : structure & etude de prix OBE <br />- Ona
            Travaux : OT <br />
            <br /> Notre entreprise, basée à Paris et au Gabon dans la province
            de l’Estuaire, intervient principalement dans tout le Gabon.
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
