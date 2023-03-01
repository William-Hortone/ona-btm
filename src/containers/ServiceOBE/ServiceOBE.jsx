import React from "react";
import images from "../../constants/images";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./serviceOBE.css";

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
        <p>Les prescriptions techniques et études de prix tous corps d’état:</p>
        <ul>
          <li>Choix des matériaux et optimisation du projet</li>
          <li>Elaboration des budgets prévisionnels et définitifs</li>
          <li>Elaboration des cahiers des charges</li>
          <li>Vérification et analyse technique des offres d'entreprises</li>
          <li>Assistance à la passation des contrats de travaux</li>
        </ul>
      </div>
      <motion.div
        ref={ref}
        className="animated serviceOBE_item app__serviceOBE-box-two"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        <img src={images.building17} alt="images of building" />
      </motion.div>
      <motion.div
        ref={refLeft}
        className="animated serviceOBE_item app__serviceOBE-box-three"
        initial="hidden"
        animate={inViewLeft ? "visible" : "hidden"}
        variants={variantsLeft}
      >
        <img src={images.building9} alt="images of building" />
      </motion.div>
      <div className="serviceOBE_item app__serviceOBE-box-four">
        <img src={images.plan7} alt="images of building" />
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-five">
        <img src={images.building16} alt="images of building" />
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-six">
        <img src={images.building15} alt="images of building" />
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-seven">
        <img src={images.building11} alt="images of building" />
      </div>
      <div className="serviceOBE_item app__serviceOBE-box-hight">
        <img src={images.plan5} alt="images of building" />
      </div>
    </div>
  );
};

export default ServiceOBE;
