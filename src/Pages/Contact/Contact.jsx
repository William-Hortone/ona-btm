import React from "react";
import { motion as m } from "framer-motion";
import images from "../../constants/images";
import { HeadImage } from "../../components";

const Contact = () => {
  return (
    <div className="app__contact">
      <HeadImage title="Contact" img={images.building9} />
    </div>
  );
};

export default Contact;
