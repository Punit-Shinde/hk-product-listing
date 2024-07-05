import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NoPageFound from "./pages/NoPageFound.jsx";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path='*' element={<NoPageFound />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
