// src/Navbar.js
import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center bg-[#012555] p-5">
      <div className="text-white text-2xl font-bold opacity-90">LOGO</div>
      <div className="flex gap-4 items-center">
        <a
          href="#link1"
          className="text-white text-sm no-underline opacity-90 hover:underline uppercase"
        >
          Home
        </a>
        <a
          href="#link2"
          className="text-white text-sm no-underline opacity-90 hover:underline uppercase"
        >
          About
        </a>
        <a
          href="#link3"
          className="text-white text-sm no-underline opacity-90 hover:underline uppercase"
        >
          Product
        </a>
        <a
          href="#link4"
          className="text-white text-sm no-underline opacity-90 hover:underline uppercase"
        >
          Solution
        </a>
        <a
          href="#link5"
          className="text-white text-sm no-underline opacity-90 hover:underline uppercase"
        >
          Contact us
        </a>
        <a
          href="#link6"
          className="text-white text-sm no-underline opacity-90 hover:underline uppercase"
        >
          Log in
        </a>
        <IoSearchSharp className="text-white text-2xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
