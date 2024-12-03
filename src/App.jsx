import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import InfosPage from "./Components/InfosPage";
import Locations from "./Components/Locations";
import LawyerNums from "./Components/LawyerNums";
import ArrestedLost from "./Components/ArrestedLost";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InfosPage" element={<InfosPage />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/LawyerNums" element={<LawyerNums />} />
        <Route path="/Lost&Arrested" element={<ArrestedLost />} />
      </Routes>
    </Router>
  );
}

export default App;
