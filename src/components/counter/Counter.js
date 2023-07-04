import React, { useEffect, useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCount(i);
      i++;

      if (i > 100) {
        clearInterval(interval);
      }
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="app__counter">
      <span className="company-name">ONA BATIMENT</span>
      <span className="counter">{count}</span>
    </div>
  );
};

export default Counter;
