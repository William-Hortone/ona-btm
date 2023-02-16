import React from "react";
import { CardImage, HeadText } from "../../components";
import images from "../../constants/images";

import "./serviceOBE.css";

const ServiceOBE = () => {
  return (
    <div className="app__serviceOBE">
      <div className="app__serviceOBE-left-box">
        <CardImage img={images.team} />
      </div>
      <div className="app__serviceOBE-right-box">
        <HeadText title="Ona bureau d'études : structure" />
        <p>
          ONA ÉTUDES est un bureau d’études structure spécialisé dans le calcul,
          la conception, l’optimisation et les études d’exécutions des
          structures pour le bâtiment et le génie civil. <br />
          Alliant rigueur et créativité, nos ingénieurs relèvent les différents
          challenges techniques des grands projets. Ils analysent et identifient
          avec précision les contraintes dès la phase d’avant projet tout en
          conseillant et orientant le client et nos partenaires. Nos ingénieurs
          jouissent d’une grande expérience et connaissent les multiples genres
          de structures exploités dans le bâtiment ainsi que les matériaux
          utilisés, qu’il s’agisse de béton, de métal, de bois ou d’une
          association entre ces différents matériaux.
        </p>
      </div>
    </div>
  );
};

export default ServiceOBE;
