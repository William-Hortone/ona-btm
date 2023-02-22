import React, { useEffect } from "react";
import "./serviceOCA.css";
import { CardImage, HeadText } from "../../components";
import images from "../../constants/images";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceOCA = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="app__serviceOCA">
      <div className="app__serviceOCA-first-box">
        <HeadText title="Ona conception architecturale" />
        <p>
          Les prestations de conception architecturale proposées par ONA
          CONCEPTION ARCHI s’adaptent aux besoins les plus ciblés de vos
          chantiers partout dans le Gabon. <br />
          Dans le cadre d’une remise en état, d’une extension ou d’un projet
          neuf, nous réalisons : <br /> <br />
        </p>
        <ul>
          <li>Esquisses et plans d'aménagement</li>
          <li>Des plans 3D de construction</li>
          <li>Des plans de valorisation d’un bâtiment ancien</li>
          <li>Des plans de surélévation d’appartement</li>
          <li>Simulation 3D</li>
        </ul>
      </div>
      <div
        data-aos="fade-right"
        data-aos-once="true"
        className="app__serviceOCA-img-box"
      >
        <img src={images.plan6} alt="" />
      </div>
      <div className="app__serviceOCA-third-box">
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
        <h3 data-aos="fade-left" data-aos-once="true">
          STRUCTURE
        </h3>
        <div data-aos="fade-left" data-aos-once="true">
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
      </div>
    </div>
  );
};

export default ServiceOCA;
