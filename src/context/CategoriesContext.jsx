import React, { createContext, useContext, useState } from "react";
import { categories } from "../data/CategoriesData";

export const CategoriesDataProvider = createContext({});

const CategoriesContext = ({ children }) => {
  const [categoriesData, setCategoriesData] = useState(categories);
  return (
    <CategoriesDataProvider.Provider value={{ categoriesData }}>
      {children}
    </CategoriesDataProvider.Provider>
  );
};

export default CategoriesContext;

export const useCategoriesData = () => useContext(CategoriesDataProvider);
