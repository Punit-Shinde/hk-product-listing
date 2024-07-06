import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NoPageFound from "./pages/NoPageFound";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("authToken");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login"/>} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
