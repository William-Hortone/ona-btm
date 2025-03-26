import React, { useState } from "react";
import { images } from "../../constants";

const SectionCenter = ({ imagesLoaded }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    console.log("Center image loaded!");
    setLoaded(true);
  };

  return (
    <div className="relative w-full h-full overflow-hidden md:w-2/5">
      {!imagesLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-700">
          <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
        </div>
      )}

      <div
        className={`relative z-20 transition-opacity duration-700 ${
          imagesLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          className="absolute object-cover w-full h-full section-center__img"
          src={images.building8}
          alt="Stylist"
          onLoad={handleImageLoad}
          onError={() => console.error("Failed to load image")}
        />
      </div>

      <p className="relative z-30 m-4 text-3xl text-white md:m-8 md:text-5xl">
        STYLIST
      </p>
    </div>
  );
};

export default SectionCenter;
