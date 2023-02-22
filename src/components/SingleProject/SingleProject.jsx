import React, { useState } from "react";
import "./singleProject.css";
// import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

const SingleProject = ({
  projectTitle,
  sProjectImg1,
  sProjectImg2,
  sProjectImg3,
  projectDescription,
}) => {
  const [scroll, setScroll] = useState(false);

  const handleChangeBg = () => {
    if (window.scrollY >= 1200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", handleChangeBg);

  return (
    <div className="app__singleProject">
      <div className="fixed-box"></div>
      <div
        className={
          scroll
            ? "app__singleProject-container bg-color"
            : "app__singleProject-container bg-color-initial "
        }
      >
        <div className="app__singleProject-container_first-box">
          <div className="container_left-box">
            <h2>{projectTitle}</h2>
          </div>
          <div className="container_right-box">
            <div className="container_right-box-img">
              <img src={sProjectImg1} alt="images of house" />
            </div>
          </div>
        </div>
        <div className="app__singleProject-container_second-box">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="container_second-box-img"
          >
            <img src={sProjectImg2} alt="" />
          </motion.div>
        </div>
        <div className="app__singleProject-container_third-box">
          {/* <div className="container_third-box-text">
            <p>{projectDescription}</p>
          </div> */}
          <div className="container_third-box-img">
            <img src={sProjectImg3} alt="photo of the house" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
