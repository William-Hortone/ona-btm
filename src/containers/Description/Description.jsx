import React from "react";
import "./description.css";
import images from "../../constants/images";
import { HeadText, AnimateDiv } from "../../components";

const Description = () => {
  return (
    <div className="app__description section__padding">
      <div className="app__description-left-box">
        <HeadText title="Ona Bâtiment" />
        <h2>Où nous construisons vos visions</h2>
        <p>
          Notre entreprise composée du service etude et travaux offre à ses
          clients et partenaires l'assurance d'une parfaite réalisation de leurs
          projets. Disposant à la fois de compétences techniques et de
          compétences en gestion de projet, les équipes d’Ona Batiment peuvent
          intervenir en maitrise d’œuvre et en entreprise générale. - Notre
          service etude dispose des logiciels de pointes pour assurer une
          qualité maximale des études de vos projets, optimisant les coûts et
          délais en apportant les solutions optimales et adaptées. <br /> -
          Notre service travaux dispose des capacités techniques et des outils
          adaptés tout en maitrisant les procédés de construction modernes.
        </p>
      </div>
      <div className="app__description-right-box">
        <AnimateDiv image={images.building11} />
      </div>
    </div>
  );
};

export default Description;
