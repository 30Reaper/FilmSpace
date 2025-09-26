import React from "react";
import "./style.css";
import Home from "./pages/Home";
import Liked from "./pages/liked";
import Movies from "./pages/Movies";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Liked" element={<Liked />} />
        <Route path="/Movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
