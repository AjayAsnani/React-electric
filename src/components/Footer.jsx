import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#012555] text-white py-12 mt-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between space-x-6 mb-8">
          <div className="flex flex-col items-center">
            <IoCallSharp className="w-12 h-12 text-white transition duration-300" />
            <p className="mt-3">(+58) 123-456-789</p>
          </div>
          <div className="flex flex-col items-center">
            <MdEmail className="w-12 h-12 text-white transition duration-300" />
            <p className="mt-3">info@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaLocationDot className="w-12 h-12 text-white transition duration-300" />
            <p className="uppercase mt-3">33195 jaipur, India</p>
          </div>
        </div>
        <div className="border-t border-gray-400 mb-4"></div>

        <div className="md:flex justify-between items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada. Nullam ac erat ante.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex justify-center space-x-6 mb-8">
                <FaFacebookF className="w-8 h-8 text-gray-300 hover:text-white transition duration-300" />
                <FaTwitter className="w-8 h-8 text-gray-300 hover:text-white transition duration-300" />
                <FaInstagram className="w-8 h-8 text-gray-300 hover:text-white transition duration-300" />
                <FaYoutube className="w-8 h-8 text-gray-300 hover:text-white transition duration-300" />
              </div>
            </div>
          </div>

          <div className="md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Our Company
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Contact US
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Packaging
                </a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <form className="flex mb-2">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 w-[150px] rounded-l-md bg-gray-800 text-gray-300 border-none focus:outline-none "
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-[#011c3a] transition duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-300 mb-4">
              Sign up for our newsletter to get the latest updates and offers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
