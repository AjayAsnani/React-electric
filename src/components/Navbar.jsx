// src/Navbar.js
import React, { useState } from "react";
import { IoSearchSharp, IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../public/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#012555] p-5">
      <div className="flex justify-around items-center">
        <div>
          <img src={Logo} className="h-[50px] w-auto" />
        </div>
        <div className="md:hidden flex items-center">
          <IoSearchSharp className="text-white text-2xl cursor-pointer mr-4" />
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <IoCloseSharp className="text-white text-2xl cursor-pointer" />
            ) : (
              <IoMenuSharp className="text-white text-2xl cursor-pointer" />
            )}
          </button>
        </div>
        <div className="hidden md:flex gap-4 items-center">
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
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-white text-sm no-underline opacity-90 hover:underline uppercase cursor-pointer"
            onClick={toggleMobileMenu}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-white text-sm no-underline opacity-90 hover:underline uppercase cursor-pointer"
            onClick={toggleMobileMenu}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="product"
            smooth={true}
            duration={500}
            className="text-white text-sm no-underline opacity-90 hover:underline uppercase cursor-pointer"
            onClick={toggleMobileMenu}
          >
            Product
          </ScrollLink>
          <ScrollLink
            to="solution"
            smooth={true}
            duration={500}
            className="text-white text-sm no-underline opacity-90 hover:underline uppercase cursor-pointer"
            onClick={toggleMobileMenu}
          >
            Solution
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="text-white text-sm no-underline opacity-90 hover:underline uppercase cursor-pointer"
            onClick={toggleMobileMenu}
          >
            Contact us
          </ScrollLink>
          <Link to="/login" onClick={toggleMobileMenu}>
            <span className="text-white text-sm no-underline opacity-90 hover:underline uppercase cursor-pointer">
              Log in
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
