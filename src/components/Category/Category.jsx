import React, { useState, useEffect } from "react";
import "./category.css";

const Category = ({ handleFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    console.log("Active category:", activeCategory);
  }, [activeCategory]);

  const handleClick = (category) => {
    setActiveCategory(category);
    handleFilterProjects(category);
  };

  return (
    <div className="categories-container">
      <h3 className="text-black">Catégories</h3>
      <div className="text-gray-600 categories_btn-container">
        {["all", "Villa", "Maison", "Bâtiment", "Appartement"].map((category) => (
          <div
            key={category}
            className={`btn-category ${activeCategory === category ? "active" : ""}`}
            onClick={() => handleClick(category)}
          >
            <span>{category === "all" ? "Tous" : category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
