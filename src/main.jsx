import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import CategoriesContext from "./context/CategoriesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesContext>
        <App />
      </CategoriesContext>
    </BrowserRouter>
  </React.StrictMode>
);
