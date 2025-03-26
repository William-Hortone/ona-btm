import React, { useState } from "react";
import { images } from "../../constants";

const SectionRight = ({ imagesLoaded }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden md:w-1/4">
      <div className="absolute inset-0 bg-white section-right__background"></div>

      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-700">
          <p>Loading...</p>
        </div>
      )}

      <div
        className={`relative z-10 transition-opacity duration-700 ${
          imagesLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          className="absolute object-cover w-full h-full section-right__img"
          src={images.building9}
          alt="building"
          onLoad={() => setLoaded(true)}
          onError={() => console.error("Failed to load image")}
        />
      </div>

      <p className="relative z-20 m-4 text-3xl text-center text-black md:m-8 md:text-5xl">
        CONTACT
      </p>
    </div>
  );
};

export default SectionRight;
