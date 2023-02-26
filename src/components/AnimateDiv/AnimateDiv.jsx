import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from "../../constants";
import { CardImage } from "../";

const AnimateDiv = ({ image }) => {
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
    <motion.div
      ref={ref}
      className="animated"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      style={{ height: "100%", width: "100%" }}
    >
      <CardImage img={image} />
      {/* Add your content here */}
    </motion.div>
  );
};

export default AnimateDiv;
