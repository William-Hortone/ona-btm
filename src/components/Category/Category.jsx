import React from "react";
import "./category.css";

const Category = ({ handleFilterProjects }) => {
  return (
    <div className="categories-container">
      <h3>Cathegories</h3>
      <div className="categories_btn-container">
        <button
          className="btn-category"
          onClick={() => handleFilterProjects("all")}
        >
          Tous
        </button>
        <button
          className="btn-category"
          onClick={() => handleFilterProjects("Villa")}
        >
          Villas
        </button>
        <button
          className="btn-category"
          onClick={() => handleFilterProjects("Maison")}
        >
          Maisons
        </button>
        <button
          className="btn-category"
          onClick={() => handleFilterProjects("Appartement")}
        >
          Appartements
        </button>
        <button
          className="btn-category"
          onClick={() => handleFilterProjects("Bâtiment")}
        >
          Bâtiment
        </button>
      </div>
    </div>
  );
};

export default Category;
