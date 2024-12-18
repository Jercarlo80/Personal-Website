import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import AboutMeRoute from "./routes/AboutMeRoute";
import PortfolioRoute from "./routes/PortfolioRoute"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<AboutMeRoute />} />
        <Route path="/portfolio" element={<PortfolioRoute />} />
      </Routes>
    </Router>
  );
}
