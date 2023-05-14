import React from "react";
import images from "../../constants/images";
import { HeadText, AnimateLeft } from "../../components";
import { FaRegClone, FaCogs } from "react-icons/fa";
import "./specialization.css";

const Specialization = () => {
  return (
    <div className="app__specialization section__padding">
      <div className="app__specialization-left-box">
        <AnimateLeft image={images.building9} />
      </div>
      <div className="app__specialization-right-box">
        <HeadText title="Nos spécialisations" />
        <div className="app__specialization-categories">
          <div className="app__specialization-category">
            <div className="specialization-icons-text">
              <FaRegClone style={{ color: "#df6127" }} />
              <h3>Conception Architecturale</h3>
            </div>
            <p>
              Les prestations de conception architecturale que nous proposons
              s’adaptent aux besoins les plus ciblés de vos chantiers.
            </p>
          </div>
          <div className="app__specialization-category">
            <div className="specialization-icons-text">
              <FaCogs style={{ color: "#df6127" }} />
              <h3>Bureau d'études GO et études de prix</h3>
            </div>
            <p>
              Un bureau d’études spécialisé dans le calcul, la conception,
              l’optimisation et les études d’exécutions des structures pour les
              bâtiments et le génie civil​, et le chiffrage de projects.
            </p>
          </div>
          <div className="app__specialization-category">
            <div className="specialization-icons-text">
              <FaCogs style={{ color: "#df6127" }} />
              <h3>Service Travaux</h3>
            </div>
            <p>
              Notre structure apporte une réponse à tous vos projets de
              construction neuves ou réhabilitation bâtiments.​
            </p>
          </div>
          <div className="app__specialization-category">
            <div className="specialization-icons-text">
              <FaCogs style={{ color: "#df6127" }} />
              <h3>Services clé en main</h3>
            </div>
            <p>
              Notre structure met à votre disposition un service clé en main.​
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
