// src/Navbar.js
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="flex justify-around items-center bg-[#012555] p-5">
      <div className="text-white text-2xl font-bold opacity-90">LOGO</div>
      <div className="flex gap-4 items-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-white text-sm no-underline opacity-90 hover:underline uppercase cursor-pointer"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="text-white text-sm no-underline opacity-90 hover:underline uppercase cursor-pointer"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="product"
          smooth={true}
          duration={500}
          className="text-white text-sm no-underline opacity-90 hover:underline uppercase cursor-pointer"
        >
          Product
        </ScrollLink>
        <ScrollLink
          to="solution"
          smooth={true}
          duration={500}
          className="text-white text-sm no-underline opacity-90 hover:underline uppercase cursor-pointer"
        >
          Solution
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="text-white text-sm no-underline opacity-90 hover:underline uppercase cursor-pointer"
        >
          Contact us
        </ScrollLink>
        <Link to="/login">
          <span className="text-white text-sm no-underline opacity-90 hover:underline uppercase cursor-pointer">
            Log in
          </span>
        </Link>
        <IoSearchSharp className="text-white text-2xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
