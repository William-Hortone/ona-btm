import React from "react";
import { CardImage, HeadText } from "../../components";
import images from "../../constants/images";
import "./serviceOBE.css";

const ServiceOBE = () => {
  return (
    <div className="app__serviceOBE">
      <div className="app__serviceOBE-box-one">
        <h3>ECONOMIE DE LA CONSTRUCTION</h3>
        <p>Les prescriptions techniques et études de prix tous corps d’état:</p>
        <ul>
          <li>Choix des matériaux et optimisation du projet</li>
          <li>Elaboration des budgets prévisionnels et définitifs</li>
          <li>Elaboration des cahiers des charges</li>
          <li>Vérification et analyse technique des offres d'entreprises</li>
          <li>Assistance à la passation des contrats de travaux</li>
        </ul>
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-two">
        <img src={images.service1} alt="" />
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-three">
        <img src={images.service2} alt="" />
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-four">
        <img src={images.building6} alt="" />
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-five">
        <img src={images.plan2} alt="" />
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-six">
        <img src={images.plan5} alt="" />
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-seven">
        <img src={images.service3} alt="" />
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-hight">
        <img src={images.plan4} alt="" />
      </div>
      {/* <div className="app__serviceOBE-left-box">
        <div className="app__serviceOBE-left-box_first">
          <CardImage img={images.service3} />
        </div>
        <div className="app__serviceOBE-left-box_second">
          <CardImage img={images.service2} />
        </div>
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
        <h3>ECONOMIE DE LA CONSTRUCTION</h3>
        <p>Les prescriptions techniques et études de prix tous corps d’état:</p>
        <ul>
          <li>Choix des matériaux et optimisation du projet</li>
          <li>Elaboration des budgets prévisionnels et définitifs</li>
          <li>Elaboration des cahiers des charges</li>
          <li>Vérification et analyse technique des offres d'entreprises</li>
          <li>Assistance à la passation des contrats de travaux</li>
        </ul>
      </div> */}
    </div>
  );
};

export default ServiceOBE;
