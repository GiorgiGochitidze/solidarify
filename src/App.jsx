import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import InfosPage from "./Components/InfosPage";
import Locations from "./Components/Locations";
import LawyerNums from "./Components/LawyerNums";
import ArrestedLost from "./Components/ArrestedLost";
import { useEffect, useState } from "react";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
import LogIn from "./Components/LogIn";
import Admin from "./Components/Admin";
import axios from "axios";

function App() {

  const [logIn,setLogIn] = useState(false)

  const checkToken = async()=>{
    try{
      const response = await axios.get('http://localhost:5000/api/users/verifyToken',{withCredentials:true})
      if(response.data.status == 'success'){
        setLogIn(true)
      }else{
        setLogIn(false)
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    const interval = 1000 * 60 * 30
    checkToken()
    setInterval(()=>{
      if(logIn)checkToken()
    },interval ) 
  }, []);
  

  return (
    <Router>
      <Navbar logIn={logIn} setLogIn={setLogIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InfosPage" element={<InfosPage />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/LawyerNums" element={<LawyerNums />} />
        <Route path="/Lost&Arrested" element={<ArrestedLost />} />
        <Route path="/Login" element = {<LogIn setLogIn={setLogIn} />} />
        <Route path="/admin" element = {<Admin setLogIn={setLogIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
