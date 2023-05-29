import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
// import Login from "./components/LogIn";
import NavBar from "./components/NavBar";
import Withdrawl from "./components/Withdrawl";
import Deposit from "./components/Deposit";
import CreateAccount from "./components/CreateAccount";
// import Balance from "./components/Balance";
import AllData from "./components/AllData";


function App() {
  return (
    <div>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="/login" element={<Login/>}/> */}
    <Route path="/create-account" element={<CreateAccount/>}/>
    <Route path="/deposit" element={<Deposit/>}/>
    <Route path="/withdrawl" element={<Withdrawl/>}/>
    {/* <Route path="/balance" element={<Balance/>}/> */}
    <Route path="/all-data" element={<AllData/>}/>
  </Routes>
    </div>
  );
}

export default App;
