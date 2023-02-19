import React from "react";
import { motion as m } from "framer-motion";
const Contact = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      Contact
    </m.div>
  );
};

export default Contact;
