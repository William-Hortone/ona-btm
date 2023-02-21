import React from "react";
import { SingleProject, NextProject } from "../../components";
import { data } from "../../constants";

const Batiment = () => {
  return (
    <div className="app__house">
      <SingleProject
        projectTitle={data[5].specification}
        sProjectImg1={data[5].img[1]}
        sProjectImg2={data[5].img[0]}
        sProjectImg3={data[5].img[1]}
      />
      <NextProject
        nextProjectTitle1={data[0].title1}
        nextProjectTitle2={data[0].title2}
        nextProjectLink={data[0].link}
        nextProjectImg1={data[0].img[0]}
        nextProjectImg2={data[0].img[1]}
      />
    </div>
  );
};

export default Batiment;
