import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./serviceContact.css";

const ServiceContact = () => {
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
      x: 100,
    },
  };

  return (
    <div className="app__serviceContact">
      <div className="app__serviceContact-left-box">
        <h2>
          Vous souhaitez travailler avec nous? <br /> Contactez-nous pour
          entamer une conversation.
        </h2>
        <Link to="/contact" data-aos="fade-up" data-aos-duration="3000">
          <span className="span"> Contactez-nous</span>
        </Link>
      </div>
      <div className="app__serviceContact-right-box">
        <div className="app__serviceContact-right-box_img1">
          <img src={images.place1} alt="images office" />
        </div>
        <motion.div
          ref={ref}
          className="animated app__serviceContact-right-box_img2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <img src={images.place2} alt="images office" />
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceContact;
