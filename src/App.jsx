import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Sidebar from "./components/Sidebar/Sidebar";
import "./index.css";
import SingleVideoPage from "./pages/SingleVideoPage/SingleVideoPage";
import Watchlater from "./pages/Watchlater/Watchlater";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="right-side">
        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route
            path={`/category/:category`}
            exact
            element={<CategoryPage />}
          />
          <Route path={"/video/:id"} exact element={<SingleVideoPage />} />
          <Route path={"/watchlater"} exact element={<Watchlater />} />
          <Route path={"/playlist"} exact element={<PlaylistPage />} />
          <Route path={"/explore"} exact element={<ExplorePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
