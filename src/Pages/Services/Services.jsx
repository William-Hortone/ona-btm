import React from "react";
import { ServiceOBE, ServiceOCA, ServiceOT } from "../../containers";
import { HeadImage } from "../../components";

import images from "../../constants/images";

const Services = () => {
  return (
    <div className="app__service">
      <HeadImage img={images.building4} title="Services" />
      <ServiceOBE />
    </div>
  );
};

export default Services;
