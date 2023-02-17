import React from "react";
import "./serviceOCA.css";
import { CardImage, HeadText } from "../../components";
import images from "../../constants/images";

const ServiceOCA = () => {
  return (
    <div className="app__serviceOCA">
      <div className="app__serviceOCA-left-box">
        <HeadText title="Ona conception architecturale" />
        <p>
          Les prestations de conception architecturale proposées par ONA
          CONCEPTION ARCHI s’adaptent aux besoins les plus ciblés de vos
          chantiers partout dans le Gabon. <br />
          Dans le cadre d’une remise en état, d’une extension ou d’un projet
          neuf, nous réalisons :
        </p>
        <ul>
          <li>Esquisses et plans d'aménagement</li>
          <li>Des plans 3D de construction</li>
          <li>Des plans de valorisation d’un bâtiment ancien</li>
          <li>Des plans de surélévation d’appartement</li>
          <li>Simulation 3D</li>
        </ul>
      </div>
      <div className="app__serviceOCA-right-box">
        <CardImage img={images.plan5} />
        {/* <div className="serviceOCA-left-box_item s-item1"></div>
        <div className="serviceOCA-left-box_item s-item2"></div>
        <div className="serviceOCA-left-box_item s-item3"></div> */}
      </div>
    </div>
  );
};

export default ServiceOCA;
