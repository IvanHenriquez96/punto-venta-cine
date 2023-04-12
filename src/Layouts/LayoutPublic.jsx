import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPublic;
