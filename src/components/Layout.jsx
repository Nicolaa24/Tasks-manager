import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-screen h-20  bg-slate-600 flex justify-between items-center drop-shadow-lg mb-10 ">
      <div className="text-3xl p-4 text-[#6a994e] font-bold">Logo</div>
      <div className="text-white p-7 text-lg ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Layout;
