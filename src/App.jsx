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
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={isAuthenticated ? <HomePage /> : <Navigate to="/" />}
          />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;