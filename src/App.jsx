import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sidebar from './components/Sidebar/Sidebar'
import './index.css'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path={"/"} exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
