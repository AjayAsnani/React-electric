// src/About.jsx
import React from "react";
import aboutImage from "../../public/about.jpg";
import { MdEmojiTransportation } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";

const Values = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-14 py-12 px-4 md:px-8 lg:px-16 relative">
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Improved Employee satisfaction
        </h2>
        <div className="main">
          <div className="first mb-2 flex items-center justify-between">
            <MdEmojiTransportation className="h-[100px] w-[100px] mr-4 text-blue" />
            <div>
              <h2 className="text-xl font-bold mb-2">
                Reliable Transportation:
              </h2>
              <p>
                On time pickups and drop offs with real time tracking provide a
                more reliable and convenient transportation experience for
                employees.
              </p>
            </div>
          </div>
          <div className="first mb-2 flex items-center justify-between">
            <IoPersonCircle className="h-[100px] w-[100px] mr-4" />
            <div>
              <h2 className="text-xl font-bold mb-2">
                increased Transparency:
              </h2>
              <p>
                On time pickups and drop offs with real time tracking provide a
                more reliable and convenient transportation experience for
                employees.
              </p>
            </div>
          </div>
          <div className="first mb-2 flex items-center justify-between">
            <FaClock className="h-[90px] w-[90px] mr-4" />
            <div>
              <h2 className="text-xl font-bold mb-2">Reduced Stress:</h2>
              <p>
                On time pickups and drop offs with real time tracking provide a
                more reliable and convenient transportation experience for
                employees.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-8 relative">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <div className="absolute top-[12rem] left-[-20px] p-4">
          <div className="text-center shadow rounded">
            <div className="bg-white p-2 w-[300px]">
              <h3 className="text-xl font-semibold mb-0 p-0">Our Values</h3>
              <p className="text-sm">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
