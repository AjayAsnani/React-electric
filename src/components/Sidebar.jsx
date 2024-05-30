import React from "react";
import { MdDashboard, MdPerson, MdNotifications } from "react-icons/md";
import Logo from "../../public/logo.png";
import { VscGraphLine } from "react-icons/vsc";
import { FaCar, FaRegClock, FaPlus } from "react-icons/fa";
import { PiSeatBold } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#012555] text-white">
      <div className="p-6 text-center">
        <div>
          <img src={Logo} className="h-[50px] w-auto" />
        </div>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          <li className="flex items-center px-6 py-2 hover:bg-gray-700">
            <MdDashboard className="w-6 h-6 mr-2" />
            <a href="#">Dashboard</a>
          </li>
          <li className="flex items-center px-6 py-2 hover:bg-gray-700">
            <MdPerson className="w-6 h-6 mr-2" />
            <a href="#">Profile</a>
          </li>
          <li className="flex items-center px-6 py-2 hover:bg-gray-700">
            <FaPlus className="w-6 h-6 mr-2" />
            <a href="#">Create Roster</a>
          </li>
          <li className="flex items-center px-6 py-2 hover:bg-gray-700">
            <MdNotifications className="w-6 h-6 mr-2" />
            <a href="#">Notifications</a>
          </li>
          <li className="flex items-center px-6 py-2 hover:bg-gray-700">
            <VscGraphLine className="w-6 h-6 mr-2" />
            <a href="#">Report</a>
          </li>
          <li className="flex items-center px-6 py-2 hover:bg-gray-700">
            <GrMapLocation className="w-6 h-6 mr-2" />
            <a href="#">Manual Trips</a>
          </li>
          <li className="flex items-center px-6 py-2 hover:bg-gray-700">
            <FaCar className="w-6 h-6 mr-2" />
            <a href="#">EV Vehicle</a>
          </li>
          <li className="flex items-center px-6 py-2 hover:bg-gray-700">
            <FaRegClock className="w-6 h-6 mr-2" />
            <a href="#">On Time Arrival/Departure</a>
          </li>
          <li className="flex items-center px-6 py-2 hover:bg-gray-700">
            <PiSeatBold className="w-6 h-6 mr-2" />
            <a href="#">No Shows and Seat Utilization</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
