import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left", // "left" or "right"
  speed = "fast",       // "fast", "normal", "slow"
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const hasDuplicated = useRef(false);

  useEffect(() => {
    if (!hasDuplicated.current && scrollerRef.current && containerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      // Set direction
      const directionValue = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty("--animation-direction", directionValue);

      // Set speed
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);

      setStart(true);
      hasDuplicated.current = true;
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="relative w-[350px] h-full max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-cover bg-center flex"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="relative z-10 flex items-center justify-center w-full h-full py-20 text-white bg-black/50 rounded-2xl">
              <div className="text-center">
                <span className="font-bold text-md opacity-80">
                  {item.title}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};
