import React from "react";
import { SingleProject, NextProject } from "../../components";
import { data } from "../../constants";

const House = () => {
  return (
    <div className="app__house">
      <SingleProject
        projectTitle={data[4].specification}
        sProjectImg1={data[4].img[0]}
        sProjectImg2={data[4].img[1]}
        sProjectImg3={data[4].img[0]}
      />
      <NextProject
        nextProjectTitle1={data[5].title1}
        nextProjectTitle2={data[5].title2}
        nextProjectLink={data[5].link}
        nextProjectImg1={data[5].img[0]}
        nextProjectImg2={data[5].img[1]}
      />
    </div>
  );
};

export default House;
