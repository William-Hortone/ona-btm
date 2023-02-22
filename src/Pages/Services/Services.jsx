import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { HeadImage, Consultation } from "../../components";
import {
  ServiceOBE,
  ServiceOCA,
  ServiceOT,
  ServiceContact,
  Footer,
} from "../../containers";
import "./service.css";

const Services = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ Scale: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="app__service"
    >
      <HeadImage img={images.building17} title="Services" />
      <ServiceOCA />
      <ServiceOBE />
      <ServiceOT />
      <ServiceContact />
      {/* <Consultation /> */}
      <div className="footer__container">
        <Footer />
      </div>
    </motion.div>
  );
};

export default Services;
