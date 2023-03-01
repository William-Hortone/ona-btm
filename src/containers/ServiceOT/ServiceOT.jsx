import React from "react";
import { HeadText } from "../../components";
import "./serviceOT.css";

const ServiceOT = () => {
  return (
    <div className="app__serviceOT">
      <div className="app__serviceOT-left-box">
        <HeadText title="Travaux Tvx" />
        <h3>Votre entreprise générale pour l'exécution de vos chantiers</h3>
        <p>
          Notre structure TRAVAUX TVX apporte une réponse à tous les projets de
          construction ou réhabilitation de bâtiments, VRD et travaux publics
          Notre pôle travaux TCE regroupe toutes les compétences nécessaires
          pour garantir la réussite de vos projets. Cela par une équipe d’hommes
          et de femmes expérimenté-es. Nos ingénieurs travaux et techniciens
          sont à pied d’oeuvre tout au long des travaux afin d’assurer un bon
          suivi. <br />
          La structure réalise pour ses clients, cela grâce à la qualité et au
          potentiel de son personnel et l’expérience de ses partenaires des
          prestations techniques de : <br />
        </p>
      </div>
      <div className="app__serviceOT-right-box">
        <ul>
          <li>Gros oeuvre</li>
          <li>VRD</li>
          <li>Maçonnerie</li>
          <li>Ouvrages "clés en main" </li>
          <li>Peinture</li>
          <li>Plomberie</li>
          <li>Assainissement</li>
          <li>Pose des pavés</li>
          <li>Électricité</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceOT;
