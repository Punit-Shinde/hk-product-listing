import React from "react";
import NotFound from "../assets/nopage.png";
import { useNavigate } from "react-router-dom";

const NoPageFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-slate-300">
      <div className="flex flex-col items-center justify-center font-bold text-[88px]">
        <div className="flex items-center">
          4
          <img
            src={NotFound}
            alt="No Product Image"
            className="w-48 animate-spin"
          />
          4
        </div>
        <h3 className="text-5xl">No Page Found</h3>
        <p className="text-2xl mt-2">
          Please{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Click Here
          </span>{" "}
          to go back
        </p>
      </div>
    </div>
  );
};

export default NoPageFound;
