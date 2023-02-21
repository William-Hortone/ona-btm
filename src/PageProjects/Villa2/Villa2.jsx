import React from "react";
import { SingleProject, NextProject } from "../../components";
import { data } from "../../constants";

const Villa2 = () => {
  return (
    <div className="app__villa2">
      <SingleProject
        projectTitle={data[1].specification}
        sProjectImg1={data[1].img[1]}
        sProjectImg2={data[1].img[0]}
        sProjectImg3={data[1].img[2]}
      />
      <NextProject
        nextProjectTitle1={data[2].title1}
        nextProjectTitle2={data[2].title2}
        nextProjectImg1={data[2].img[0]}
        nextProjectImg2={data[2].img[1]}
      />
    </div>
  );
};

export default Villa2;
