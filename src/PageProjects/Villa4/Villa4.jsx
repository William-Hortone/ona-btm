import React from "react";
import { SingleProject, NextProject } from "../../components";
import { data } from "../../constants";

const Villa4 = () => {
  return (
    <div className="app__villa4">
      <SingleProject
        projectTitle={data[3].specification}
        sProjectImg1={data[3].img[2]}
        sProjectImg2={data[3].img[0]}
        sProjectImg3={data[3].img[1]}
      />
      <NextProject
        nextProjectTitle1={data[4].title1}
        nextProjectTitle2={data[4].title2}
        nextProjectLink={data[4].link}
        nextProjectImg1={data[4].img[0]}
        nextProjectImg2={data[4].img[1]}
      />
    </div>
  );
};

export default Villa4;
