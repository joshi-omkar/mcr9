import React from "react";

import "./Home.css";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <div className="home">
      <h1>Categories</h1>
      <Categories />
    </div>
  );
};

export default Home;
