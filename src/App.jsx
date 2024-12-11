import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import InfosPage from "./Components/InfosPage";
import Locations from "./Components/Locations";
import LawyerNums from "./Components/LawyerNums";
import ArrestedLost from "./Components/ArrestedLost";
import { useEffect } from "react";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
import LogIn from "./Components/LogIn";
import Admin from "./Components/Admin";

function App() {

  useEffect(() => {
    const interval = 1000 * 60 * 30
    setInterval(()=>{
     
    },interval ) 
  }, []);
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InfosPage" element={<InfosPage />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/LawyerNums" element={<LawyerNums />} />
        <Route path="/Lost&Arrested" element={<ArrestedLost />} />
        <Route path="/Login" element = {<LogIn/>} />
        <Route path="/admin" element = {<Admin/>} />
      </Routes>
    </Router>
  );
}

export default App;
