import React from "react";

const SectionLeft = () => {
  return (
    <div className="relative flex flex-col justify-end w-1/3 h-full p-6 z-1">
      <p className="text-xl text-gray-500">MEET</p>
      <p className="text-4xl leading-tight section-left__title">
        MARTINA <br /> ALMQUIST
      </p>
      <svg
        className="absolute right-[-1.25vw] bottom-[7vw] w-[2.5vw] h-[2.5vw] asterix"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M39.75 14.25L34.75 5.75L25 11.25V0H15V11.25L5 5.75L0 14.25L9.75 20L0 25.75L5 34.25L15 28.75V40H25V28.75L34.75 34.25L39.75 25.75L29.75 20L39.75 14.25Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default SectionLeft;
