import React from "react";
import "./villa1.css";
import { SingleProject, NextProject } from "../../components";
import { images } from "../../constants";

const Villa1 = () => {
  return (
    <div className="app__villa1">
      <SingleProject />
      <NextProject />
    </div>
  );
};

export default Villa1;
