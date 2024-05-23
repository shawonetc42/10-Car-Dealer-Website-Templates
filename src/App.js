// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./pages/new/Page";
import Home from "./pages/landing/Home";
import Home2 from "./pages/landing/Home2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home-2" element={<Home2/>} />
        <Route path="/new/:id" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;
