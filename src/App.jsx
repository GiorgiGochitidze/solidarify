import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import InfosPage from "./Components/InfosPage";
import Locations from "./Components/Locations";
import LawyerNums from "./Components/LawyerNums";
import { useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function App() {

  // useEffect(() => {
  //   setTimeout(() => {

  //     axios
  //     .post("http://localhost:5000/api/users/login", {
  //       email: "solidarify@gmail.com",
  //       password: "1234",
  //     })
  //     .then((response) => {
  //       console.log(jwtDecode(response.data.token));
  //     })
  //     .catch((err) => {
  //       console.log("Something went wrong: ", err);
  //     });
  //   }, 1000)
  //   }, []);
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InfosPage" element={<InfosPage />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/LawyerNums" element={<LawyerNums />} />
      </Routes>
    </Router>
  );
}

export default App;
