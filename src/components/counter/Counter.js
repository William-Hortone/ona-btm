import React, { useEffect, useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 4000;

    const updateCount = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const newCount = Math.floor(progress * 100);

      setCount(newCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, []);

  return (
    <div className="app__counter">
      <span className="company-name">ONA BATIMENT</span>
      <span className="counter">{count}</span>
    </div>
  );
};

export default Counter;
