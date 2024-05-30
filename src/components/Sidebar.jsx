import React from "react";
import { MdDashboard, MdPerson, MdNotifications } from "react-icons/md";
import Logo from "../../public/logo.png";
import { VscGraphLine } from "react-icons/vsc";
import { FaCar, FaRegClock, FaPlus } from "react-icons/fa";
import { PiSeatBold } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  const isActive = (path) => pathname === path;

  return (
    <div className="w-64 bg-[#012555] text-white">
      <div className="p-6 text-center">
        <div>
          <img src={Logo} className="h-[50px] w-auto" alt="Logo" />
        </div>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          {[
            { icon: <MdDashboard className="w-6 h-6 mr-2" />, text: "Dashboard", link: "/" },
            { icon: <MdPerson className="w-6 h-6 mr-2" />, text: "Profile", link: "/profile" },
            { icon: <FaPlus className="w-6 h-6 mr-2" />, text: "Create Roster", link: "/roster" },
            { icon: <MdNotifications className="w-6 h-6 mr-2" />, text: "Notifications", link: "/notifications" },
            { icon: <VscGraphLine className="w-6 h-6 mr-2" />, text: "Report", link: "/report" },
            { icon: <GrMapLocation className="w-6 h-6 mr-2" />, text: "Manual Trips", link: "/manual-trips" },
            { icon: <FaCar className="w-6 h-6 mr-2" />, text: "EV Vehicle", link: "/ev-vehicle" },
            { icon: <FaRegClock className="w-6 h-6 mr-2" />, text: "On Time Arrival/Departure", link: "/on-time-arrival-departure" },
            { icon: <PiSeatBold className="w-6 h-6 mr-2" />, text: "No Shows and Seat Utilization", link: "/no-shows-seat-utilization" }
          ].map((item, index) => (
            <li
              key={index}
              className={`flex items-center px-6 py-2 hover:bg-gray-700 cursor-pointer ${
                isActive(item.link) ? "bg-transparent border border-white" : ""
              }`}
            >
              {item.icon}
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
