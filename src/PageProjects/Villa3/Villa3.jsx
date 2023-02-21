import React from "react";
import { SingleProject, NextProject } from "../../components";
import { data } from "../../constants";

const Villa3 = () => {
  return (
    <div className="app__villa3">
      <SingleProject
        projectTitle={data[2].specification}
        sProjectImg1={data[2].img[2]}
        sProjectImg2={data[2].img[0]}
        sProjectImg3={data[2].img[1]}
      />
      <NextProject
        nextProjectTitle1={data[3].title1}
        nextProjectTitle2={data[3].title2}
        nextProjectImg1={data[3].img[0]}
        nextProjectImg2={data[3].img[1]}
      />
    </div>
  );
};

export default Villa3;
