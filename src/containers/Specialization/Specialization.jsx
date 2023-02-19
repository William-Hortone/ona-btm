import React from "react";
import "./specialization.css";
import images from "../../constants/images";
import { CardImage, HeadText } from "../../components";
import { FaRegClone } from "react-icons/fa";

const Specialization = () => {
  return (
    <div className="app__specialization section__padding">
      <div className="app__specialization-left-box">
        <CardImage img={images.building9} />
      </div>
      <div className="app__specialization-right-box">
        <HeadText title="Nos spécialisations" />
        <p className="text-description">
          Les prestations de conception architecturale proposées par ONA
          CONCEPTION ARCHI s’adaptent aux besoins les plus ciblés de vos
          chantiers partout dans le Gabon.
        </p>
        <div className="app__specialization-categories">
          <div className="app__specialization-category">
            <h3>
              <FaRegClone /> Conception Architecturale
            </h3>
            <p>
              Esquisses et plans d'aménagement, Des plans 3D de construction
              ....
            </p>
          </div>
          <div className="app__specialization-category">
            <h3>Service Clé En Main​</h3>
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
