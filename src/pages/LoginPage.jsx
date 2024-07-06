import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        localStorage.setItem("authToken", token);

        navigate("/");
        console.log("Login successful! Token saved to localStorage.");
      } else {
        console.log("Login failed. Invalid credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-300">
      <div className="w-[400px] flex flex-col items-center justify-center m-5 p-5 border-2 rounded-lg bg-slate-200 drop-shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 ">Login Form</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 duration-500"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
