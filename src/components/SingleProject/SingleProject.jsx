import React from "react";
import "./singleProject.css";
import { images } from "../../constants";

const SingleProject = () => {
  return (
    <div className="app__singleProject">
      <div className="fixed-box"></div>
      <div className="app__singleProject-container">
        <div className="app__singleProject-container_first-box">
          <div className="container_left-box">
            <h2>Villa écologique en brique de terre</h2>
          </div>
          <div className="container_right-box">
            <div className="container_right-box-img">
              <img src={images.villa1} alt="" />
            </div>
          </div>
        </div>
        <div className="app__singleProject-container_second-box"></div>
        <div className="app__singleProject-container_third-box"></div>
      </div>
    </div>
  );
};

export default SingleProject;
