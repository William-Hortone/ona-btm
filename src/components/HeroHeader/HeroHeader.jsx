import React from "react";

const Header = () => {
  return (
    <header className="absolute z-10 flex items-center justify-between w-full p-4">
      <p className="text-lg transform -rotate-180">BY TWO</p>
      <p className="text-sm opacity-75">
        Inspired by{" "}
        <a
          href="https://dribbble.com/shots/4567055-By-Two-Creatives-Platform-Animation/attachments/10469364?mode=media"
          className="underline"
        >
          Zhenya Rynzhuk
        </a>
      </p>
      <div className="flex flex-col gap-1 cursor-pointer">
        <div className="w-6 h-[2px] bg-white"></div>
        <div className="w-6 h-[2px] bg-white"></div>
      </div>
    </header>
  );
};

export default Header;
