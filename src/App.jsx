import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./components/landingpage";
import Cataloguepage from "./components/catalogue";
export default function App() {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<Landingpage />} />

        
     
        <Route path="/catalogue" element={<Cataloguepage />} />
      </Routes>
    </Router>
  );
}
