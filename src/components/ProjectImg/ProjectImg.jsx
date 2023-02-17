import React from "react";
import "./projectImg.css";

const ProjectImg = ({ img1, img2 }) => {
  return (
    <div className="app__projectImg">
      <img src={img1} alt="project images" className="projectImg_img1" />
      <img src={img2} alt=" project images" className="projectImg_img2" />
    </div>
  );
};

export default ProjectImg;
