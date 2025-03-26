import React from "react";
import images from "../../constants/images";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./serviceOBE.css";

import { FaSlack } from "react-icons/fa";

const ServiceOBE = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const [refLeft, inViewLeft] = useInView({
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
      x: 100,
    },
  };
  const variantsLeft = {
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
    <div className="app__serviceOBE">
      <div className="app__serviceOBE-box-one">
        <h3>ECONOMIE DE LA CONSTRUCTION</h3>
        <p>
          Nous assurons un suivi précis des coûts et de la qualité à travers:
        </p>

        <ul>
          <li className="flex items center">
            <FaSlack size={20} color="#ff7a3d" />
            <span>
              Prescriptions techniques et études de prix (choix des matériaux,
              optimisation du budget)
            </span>
          </li>
          <li className="flex items center">
            <FaSlack size={20} color="#ff7a3d" />
            <span> Élaboration des cahiers des charges</span>
          </li>
          <li className="flex items center">
            <FaSlack size={20} color="#ff7a3d" />
            <span>Elaboration des cahiers des charges</span>
          </li>
          <li className="flex items center">
            <FaSlack size={20} color="#ff7a3d" />
            <span>Analyse et validation des offres d’entreprises</span>
          </li>
          <li className="flex items center">
            <FaSlack size={20} color="#ff7a3d" />
            <span>Assistance à la passation des contrats de travaux</span>
          </li>
        </ul>
        <p className="mt-3">
          Vous bénéficiez d’une expertise complète et d’un accompagnement
          sur-mesure pour garantir le succès de vos projets de construction.
        </p>
      </div>
      <motion.div
        ref={ref}
        className="animated serviceOBE_item app__serviceOBE-box-two"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        <img src={images.travaux16} alt="images of building" />
      </motion.div>
      <motion.div
        ref={refLeft}
        className="animated serviceOBE_item app__serviceOBE-box-three"
        initial="hidden"
        animate={inViewLeft ? "visible" : "hidden"}
        variants={variantsLeft}
      >
        <img src={images.travaux12} alt="images of building" />
      </motion.div>
      <div className="serviceOBE_item app__serviceOBE-box-four">
        <img src={images.travaux14} alt="images of building" />
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-five">
        <img src={images.travaux15} alt="images of building" />
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-six">
        <img src={images.travaux11} alt="images of building" />
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-seven">
        <img src={images.travaux2} alt="images of building" />
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-hight">
        <img src={images.travaux4} alt="images of building" />
      </div>
    </div>
  );
};

export default ServiceOBE;
