import React from "react";
import "./category.css";

const Category = ({ handleFilterProjects }) => {
  return (
    <div className="categories-container">
      <h3>Cathegories</h3>
      <div className="categories_btn-container">
        <div
          className="btn-category"
          onClick={() => handleFilterProjects("all")}
        >
          <span> Tous</span>
        </div>
        <div
          className="btn-category"
          onClick={() => handleFilterProjects("Villa")}
        >
          <span> Villas</span>
        </div>
        <div
          className="btn-category"
          onClick={() => handleFilterProjects("Maison")}
        >
          <span> Maisons</span>
        </div>

        <div
          className="btn-category"
          onClick={() => handleFilterProjects("Bâtiment")}
        >
          <span> Bâtiment</span>
        </div>
        <div
          className="btn-category"
          onClick={() => handleFilterProjects("Appartement")}
        >
          <span> Appartements</span>
        </div>
      </div>
    </div>
  );
};

export default Category;
