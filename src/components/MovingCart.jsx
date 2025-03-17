import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function MovingCart({direction, data}) {
  return (
    <div className="h-auto rounded-md flex flex-col antialiased bg-secondary dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={data}
        direction={direction}
        speed="slow"
      />
    </div>
  );
}

