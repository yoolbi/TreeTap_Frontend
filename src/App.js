import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Company from "./pages/Company";
import Profile from "./pages/Profile";

import "./index.css";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/Company" element={<Company />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
  );
}

export default App;

