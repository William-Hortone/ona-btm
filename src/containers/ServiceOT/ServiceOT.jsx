import React from "react";
import { CardImage, HeadText } from "../../components";
import images from "../../constants/images";
import "./serviceOT.css";

const ServiceOT = () => {
  return (
    <div className="app__serviceOT">
      <div className="app__serviceOT-left-box">
        <HeadText title="Ona conception architecturale" />
        <p>
          Notre professionnalisme, notre engagement et notre sens du service de
          proximité sont la garantie de la qualité de nos missions. Nous
          intervenons dans les domaines d’activités suivants: <br />
        </p>
        <h3>STRUCTURE</h3>
        <p>La conception, l’optimisation et l'étude de structures :</p>
        <ul>
          <li>Béton armé</li>
          <li>Construction métallique</li>
          <li>Construction en bois</li>
        </ul>
        <p>Les plans de projet et d'exécutions:</p>
        <ul>
          <li>Coffrage</li>
          <li>Armature</li>
          <li>Nomenclatures</li>
        </ul>
        <p>Les calculs de structures :</p>
        <ul>
          <li>Descentes de charges</li>
          <li>Calcul 3D et dynamique</li>
          <li>
            Éditer toute note de calcul de dimensionnement conformément aux
            réglementations en vigueur.
          </li>
        </ul>
      </div>
      <div className="app__serviceOT-right-box">
        <div className="serviceOT-left-box_item s2-item1"></div>
        <div className="serviceOT-left-box_item s2-item2"></div>
        <div className="serviceOT-left-box_item s2-item3"></div>
      </div>
    </div>
  );
};

export default ServiceOT;
