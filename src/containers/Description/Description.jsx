import React, { useEffect } from "react";
import "./description.css";
import images from "../../constants/images";
import { HeadText, CardImage } from "../../components";
import AOS from "aos";
import "aos/dist/aos.css";

const Description = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="app__description section__padding">
      <div className="app__description-left-box">
        <HeadText title="Ona Bâtiment" />
        <h2>Où nous construisons vos visions</h2>
        <p>
          Notre bureau d'études offre à ses clients et partenaires l'assurance
          d'une parfaire réalisation de leurs projets. Nous optimisons les coûts
          et les délais en apportant les solutions optimales à vos projets. Nos
          ingénieurs disposent des capacités techniques et des logiciels de
          pointes pour assurer une qualité maximale des études.
        </p>
        <div className="app__description-contact_info">
          <p>Appelez-Nous Dès Aujourd'hui</p>
          <p> +33 695469273 / +241 077761684</p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-once="true"
        className="app__description-right-box"
      >
        <CardImage img={images.building11} />
      </div>
    </div>
  );
};

export default Description;
