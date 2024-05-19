// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./pages/new/Page";
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new/:id" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;
