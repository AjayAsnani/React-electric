import React, { useState } from "react";
import { FaSearch, FaShareAlt, FaBars } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Data from "../components/Data";

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Daily");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Vehicle name"
                className="bg-white rounded-full px-4 py-2 pl-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <FaShareAlt className="w-6 h-6 text-gray-700 cursor-pointer" />
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none"
              >
                <span>{selectedOption}</span>
                <FaBars className="ml-2" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <ul className="py-1">
                    <li
                      className="px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleOptionClick("Daily")}
                    >
                      <a href="#">Daily</a>
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleOptionClick("Weekly")}
                    >
                      <a href="#">Weekly</a>
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleOptionClick("Monthly")}
                    >
                      <a href="#">Monthly</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Main content area */}
        <div>
          <Data />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
