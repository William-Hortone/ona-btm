import React from "react";
import { HeadText } from "../../components";
import images from "../../constants/images";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./serviceOCA.css";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

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
          Nous adaptons nos prestations aux besoins spécifiques de chaque projet
          en tenant compte de la topographie du terrain. Que ce soit pour une
          remise en état, une extension ou une construction neuve, nous vous
          accompagnons à chaque étape avec des solutions sur mesure : <br />
          <br />
        </p>
        <span className="text=black font-medium">Nos Prestations :</span>
        <ul>
          <li className="flex items-center">
            <IoCheckmarkDoneCircle size={25} color="#ff7a3d" />
            <span>Esquisses et plans d'aménagement </span>
          </li>
          <li className="flex w-full h-auto gap-2 items-centedr">
            <IoCheckmarkDoneCircle size={25} color="#ff7a3d" />
            <span>
              Modélisation 3D (plans de construction, simulations, <br />
              valorisation du patrimoine)
            </span>
          </li>
          <li className="flex items-center">
            <IoCheckmarkDoneCircle size={25} color="#ff7a3d" />
            <span>Études de surélévation et optimisation des espaces</span>
          </li>
          <li className="flex items-center">
            <IoCheckmarkDoneCircle size={25} color="#ff7a3d" />
            <span>Synthèse des plans et intégration technique</span>
          </li>
        </ul>
      </div>

      <motion.div
        ref={ref}
        className="animated app__serviceOCA-img-box"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        <img src={images.travaux2} alt="plan images" />
      </motion.div>

      <div className="app__serviceOCA-third-box">
        <HeadText title="Bureau d'études : structure" />
        <p>
          Notre bureau d’études, est spécialisé dans le calcul, la conception et
          l’optimisation des structures en bâtiment et en génie civil. Nos
          ingénieurs combinent rigueur et créativité pour relever les défis
          techniques et proposer des solutions adaptées aux contraintes
          spécifiques de chaque projet
        </p>
        <p>
          Notre professionnalisme, notre engagement et notre sens du service de
          proximité sont la garantie de la qualité de nos missions. Nous
          intervenons dans les domaines d’activités suivants: <br />
        </p>
        {/* <HeadText title="Nos domaines d'expertise" /> */}
        <h3>Nos domaines d'expertise</h3>
        <motion.div
          ref={ref}
          className="animated service_be-structure-container "
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <p>Conception et optimisation des structures:</p>
          <ul>
            <li className="flex items-center">
              <IoCheckmarkDoneCircle size={25} color="#ff7a3d" />
              <span>Béton armé</span>
            </li>
            <li className="flex items-center">
              <IoCheckmarkDoneCircle size={25} color="#ff7a3d" />
              <span>Construction métallique</span>
            </li>
            <li className="flex items-center">
              <IoCheckmarkDoneCircle size={25} color="#ff7a3d" />
              <span>Construction en bois</span>
            </li>
          </ul>
          <p>Plans d'exécution détaillés:</p>
          <ul>
            <li className="flex items-center">
              <IoCheckmarkDoneCircle size={25} color="#ff7a3d" />
              <span>Coffrage</span>
            </li>
            <li className="flex items-center">
              <IoCheckmarkDoneCircle size={25} color="#ff7a3d" />
              <span>Armature</span>
            </li>
            <li className="flex items-center">
              <IoCheckmarkDoneCircle size={25} color="#ff7a3d" />
              <span>Nomenclature</span>
            </li>
          </ul>
          <p>Calculs et analyses techniques :</p>
          <ul>
            <li className="flex items-center">
              <IoCheckmarkDoneCircle size={25} color="#ff7a3d" />
              <span>Descentes de charges</span>
            </li>
            <li className="flex items-center">
              <IoCheckmarkDoneCircle size={25} color="#ff7a3d" />
              <span>Calculs 3D et simulations dynamiques</span>
            </li>
            <li className="flex items-center">
              <IoCheckmarkDoneCircle size={25} color="#ff7a3d" />
              <span>Notes de calcul conformes aux normes en vigueur.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceOCA;
