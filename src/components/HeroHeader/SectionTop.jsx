import React from "react";

const SectionTop = () => {
  return (
    <div className="absolute flex flex-col justify-end w-full h-[70%] z-1 p-6">
      <div className="flex items-center justify-between">
        <div className="section-top__title text-[21vw] font-bold leading-none">
          ONA
        </div>
        <button className="flex items-center justify-center w-24 h-24 border rounded-full border-white/50 text-white/50 hover:bg-white/10">
          SEARCH
        </button>
      </div>
      <div className="flex items-center justify-between mt-6 section-top__content">
        <p>ALL ARTISTS +</p>
        <p>ALL WORKS OF ARTISTS</p>
      </div>
      <div className="w-full h-[1px] bg-white/25 separator my-4"></div>
    </div>
  );
};

export default SectionTop;
