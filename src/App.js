import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";

import Purecomp from "./components/purecomp";
import Purecompf from "./components/purecompf";
import Adjel from "./components/adjel";
import Profile from "./components/profile";
import User from "./components/User";
import Transitioncomp from "./Transition/Transition";

import './style/style.css'
import Csstransition from "./Transition/Csstransition";
import Tgroup from "./Transition/Tgroup";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
        <Route path="/tgroup" element={<Tgroup />} />
          <Route path="/csstransition" element={<Csstransition />} />
          <Route path="/transition" element={<Transitioncomp />} />
          <Route path="/user" element={<User />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/adjel" element={<Adjel />} />
          <Route path="/purecompf" element={<Purecompf />} />
          <Route path="/purecomp" element={<Purecomp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
