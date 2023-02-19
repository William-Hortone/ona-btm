import React from "react";
import {
  ServiceOBE,
  ServiceOCA,
  ServiceOT,
  ServiceContact,
} from "../../containers";
import { HeadImage, Consultation } from "../../components";
import { motion as m } from "framer-motion";
import images from "../../constants/images";

const Services = () => {
  return (
    <div
      // initial={{ y: "100%" }}
      // animate={{ y: "0%" }}
      // transition={{ duration: 0.75, ease: "easeOut" }}
      // exit={{ opacity: 1 }}
      className="app__service"
    >
      <HeadImage img={images.building4} title="Services" />
      <ServiceOCA />
      <ServiceOBE />
      <ServiceOT />
      <ServiceContact />
      {/* <Consultation /> */}
    </div>
  );
};

export default Services;
