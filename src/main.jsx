import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import CategoriesContext from "./context/CategoriesContext";
import VideoContext from "./context/VideoDataContext";
import WatchlaterContext from "./context/WatchlaterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesContext>
        <VideoContext>
          <WatchlaterContext>
            <App />
          </WatchlaterContext>
        </VideoContext>
      </CategoriesContext>
    </BrowserRouter>
  </React.StrictMode>
);
