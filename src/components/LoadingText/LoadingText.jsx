import React, { useState, useEffect } from "react";
import "./loadingText.css";

const LoadingText = ({ text }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-text ${loading ? "loading" : ""}`}>{text}</div>
  );
};

export default LoadingText;
