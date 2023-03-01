import React from "react";
import { HeadText } from "../../components";
import images from "../../constants/images";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./serviceOCA.css";

const ServiceOCA = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <div className="app__serviceOCA">
      <div className="app__serviceOCA-first-box">
        <HeadText title="conception architecturale" />
        <p>
          Les prestations de conception architecturale proposées par CONCEPTION
          ARCHI s’adaptent aux besoins les plus ciblés de vos chantiers partout
          dans le Gabon. <br />
          Dans le cadre d’une remise en état, d’une extension ou d’un projet
          neuf, nous réalisons : <br /> <br />
        </p>
        <ul>
          <li>Esquisses et plans d'aménagement</li>
          <li>Des plans 3D de construction</li>
          <li>Des plans de valorisation d’un bâtiment ancien</li>
          <li>Des plans de surélévation d’appartement</li>
          <li>Simulation 3D</li>
          <li>Synthèse des plans</li>
        </ul>
      </div>
      <motion.div
        ref={ref}
        className="animated app__serviceOCA-img-box"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        <img src={images.plan6} alt="plan images" />
      </motion.div>
      <div className="app__serviceOCA-third-box">
        <HeadText title="Bureau d'études : structure" />
        <p>
          ÉTUDES est un bureau d’études structure spécialisé dans le calcul, la
          conception, l’optimisation et les études d’exécutions des structures
          pour le bâtiment et le génie civil. <br />
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
        <motion.div
          ref={ref}
          className="animated service_be-structure-container "
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceOCA;
