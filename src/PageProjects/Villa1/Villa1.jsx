import React from "react";
import "./villa1.css";
import { SingleProject, NextProject } from "../../components";
import { data } from "../../constants";

const Villa1 = () => {
  return (
    <div className="app__villa1">
      <SingleProject
        projectTitle={data[0].specification}
        sProjectImg1={data[0].img[1]}
        sProjectImg2={data[0].img[0]}
        sProjectImg3={data[0].img[2]}
        projectDescription={data[0].dsc}
      />
      <NextProject
        nextProjectTitle1={data[1].title1}
        nextProjectTitle2={data[1].title2}
        nextProjectLink={data[1].link}
        nextProjectImg1={data[1].img[0]}
        nextProjectImg2={data[1].img[1]}
      />
    </div>
  );
};

export default Villa1;
