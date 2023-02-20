import React, { useEffect } from "react";
import "./specialization.css";
import images from "../../constants/images";
import { CardImage, HeadText } from "../../components";
import { FaRegClone, FaCogs } from "react-icons/fa";
// import { IoConstructOutline } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Specialization = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="app__specialization section__padding">
      <div
        data-aos="fade-right"
        data-aos-once="true"
        className="app__specialization-left-box"
      >
        <CardImage img={images.building9} />
      </div>
      <div className="app__specialization-right-box">
        <HeadText title="Nos spécialisations" />
        <p className="text-description">
          Les prestations de conception architecturale proposées par ONA
          CONCEPTION ARCHI
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
            <h3>
              <FaCogs /> ​Expertise & Diagnostic
            </h3>
            <p>A short description to prove that you are the best.​</p>
          </div>
          <div className="app__specialization-category">
            <h3>Note De Calcul & Note Sismique</h3>
            <p>A short description to prove that you are the best.​</p>
          </div>
          <div className="app__specialization-category">
            <h3> Bureau D'Etude TCE </h3>
            <p>A short description to prove that you are the best.​</p>
          </div>
          <div className="app__specialization-category">
            <h3>Engenierie & Calcul De Structure</h3>
            <p>A short description to prove that you are the best.​</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
