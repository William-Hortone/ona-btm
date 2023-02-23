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
            <div className="specialization-icons-text">
              <FaRegClone style={{ color: "#df6127" }} />
              <h3>Conception Architecturale</h3>
            </div>
            <p>
              Les prestations de conception architecturale que nous proposons
              s’adaptent aux besoins les plus ciblés de vos chantiers partout
              dans le Gabon.
            </p>
          </div>
          <div className="app__specialization-category">
            <div className="specialization-icons-text">
              <FaCogs style={{ color: "#df6127" }} />
              <h3>Bureau d'études GO</h3>
            </div>
            <p>
              Un bureau d’études spécialisé dans le calcul, la conception,
              l’optimisation et les études d’exécutions des structures pour le
              bâtiment et le génie civil​
            </p>
          </div>
          <div className="app__specialization-category">
            <div className="specialization-icons-text">
              <FaCogs style={{ color: "#df6127" }} />

              <h3>Travaux</h3>
            </div>
            <p>
              Notre structure apporte une réponse à tous vos projets de
              construction ou réhabilitation de bâtiments.​
            </p>
          </div>
          <div className="app__specialization-category">
            <div className="specialization-icons-text">
              <FaCogs style={{ color: "#df6127" }} />

              <h3>Services clé en main</h3>
            </div>
            <p>A short description to prove that you are the best.​</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
