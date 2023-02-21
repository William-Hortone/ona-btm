import React, { useState } from "react";
import "./singleProject.css";
import { images } from "../../constants";
// import { NextProject } from "../";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

const SingleProject = () => {
  const [scroll, setScroll] = useState(false);

  const handleChangeBg = () => {
    if (window.scrollY >= 1000) {
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
            ? "app__singleProject-container section__padding bg-color"
            : "app__singleProject-container section__padding bg-color-initial "
        }
      >
        <div className="app__singleProject-container_first-box">
          <div className="container_left-box">
            <h2>Villa écologique en brique de terre</h2>
          </div>
          <div className="container_right-box">
            <div className="container_right-box-img">
              <img src={images.villa1} alt="images of house" />
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
            <img src={images.villa2} alt="" />
            {/* <Parallax strength={300} bgImage={images.villa2}>
              <div className="box">
                <div className="text">We do Parallax </div>
              </div>
            </Parallax> */}
          </motion.div>
        </div>
        <div className="app__singleProject-container_third-box">
          <div className="container_third-box-img">
            <img src={images.villa3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
