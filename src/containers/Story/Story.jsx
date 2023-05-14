import React from "react";
import { CardImage, HeadText } from "../../components";
import images from "../../constants/images";
import { FaCheck } from "react-icons/fa";
import "./story.css";

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
            - Conception architecturale : CA <br />
            - Bureau d’études : structure & etude de prix BE <br />- Travaux :
            TVX <br />
            <br /> Intervient sur deux secteurs géographiques : Afrique et
            Europe. Au Gabon, Ona Batiment intervient aussi bien en etude de
            projet qu'en realisation des travaux. En Afrique et en Europe, nous
            intervenons uniquement en etude de projet.
          </p>

          <div className="app__story-description-items">
            <div>
              <span>
                <FaCheck />
              </span>
              <p>spécialiste professionnel</p>
            </div>
            <div>
              <span>
                <FaCheck />
              </span>
              <p>Idées brillantes</p>
            </div>
            <div>
              <span>
                <FaCheck />
              </span>
              <p>Constructeurs précis</p>
            </div>
            <div>
              <span>
                <FaCheck />
              </span>
              <p>Assistance 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
