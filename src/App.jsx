import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landingpage from "./components/landingpage";
import Cataloguepage from "./components/catalogue";
import Projectpage from "./components/project";

export default function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Navigate to="/landingpage" replace />} />

        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/project" element={<Projectpage />} />
        <Route path="/catalogue" element={<Cataloguepage />} />
      </Routes>
    </Router>
  );
}
