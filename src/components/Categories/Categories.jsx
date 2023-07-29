import React from "react";
import { useCategoriesData } from "../../context/CategoriesContext";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const { categoriesData } = useCategoriesData();

  console.log(categoriesData);

  return (
    <div className="category-container">
      {categoriesData.map((category) => {
        return (
          <Link
            to={`/category/${category.category
              .replace(/\s+/g, "")
              .toLowerCase()}`}
            key={category._id}
          >
            <div className="category" key={category._id}>
              <img src={category.thumbnail} />
              <h3>{category.category}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
