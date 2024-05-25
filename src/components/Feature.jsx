import React from "react";
import feature1Image from "../../public/features.jpeg";
import feature2Image from "../../public/features.jpeg";
import feature3Image from "../../public/features.jpeg";
import { MdLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";

const Feature = () => {
  return (
    <div className="relative mb-14">
      <div
        className="bg-cover bg-center bg-feature-image"
        style={{
          minHeight: "400px",
        }}
      >
        <div className="  py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
              Benefits of companies managing
              <br /> employee transportation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative rounded-lg shadow-lg">
                <img
                  src={feature1Image}
                  alt="Feature 1"
                  className="w-full h-[400px] rounded-lg mb-4"
                />
                <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col">
                  <MdLocationOn
                    alt="Logo 3"
                    className="w-auto h-[5rem]  mr-2 text-white mb-4"
                  />
                  <h2 className="text-white text-[22px]  ">
                    Centralized Location
                  </h2>
                </div>
                <div className="flex items-center justify-center mb-4 text-center">
                  <p className="text-sm text-white">
                    Manages all aspects of employee transportation in one place
                    - trip planning, roaster creation, vehicle and driver
                    allocation, employee management and real-time tracking.
                  </p>
                </div>
              </div>
              <div className="relative rounded-lg shadow-lg">
                <img
                  src={feature2Image}
                  alt="Feature 2"
                  className="w-full h-[400px] rounded-lg mb-4"
                />
                <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col">
                  <FaRegClock
                    alt="Logo 3"
                    className="w-auto h-[5rem]  mr-2 text-white mb-4"
                  />
                  <h2 className="text-white text-[22px] ">Automated Tasks</h2>
                </div>
                <div className="flex items-center justify-center mb-4 text-center">
                  <p className="text-sm text-white">
                    Automates tasks like generating trip sheets, sending OTPs,
                    and tracking trip progress, saving time and reducing manual
                    errors.
                  </p>
                </div>
              </div>
              <div className="relative rounded-lg shadow-lg">
                <img
                  src={feature3Image}
                  alt="Feature 3"
                  className="w-full h-[400px] rounded-lg mb-4"
                />
                <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col">
                  <FaRegBell
                    alt="Logo 3"
                    className="w-auto h-[5rem] mr-2 text-white mb-4"
                  />
                  <h2 className="text-white text-[22px] text-center ">
                    Automated Notifications
                  </h2>
                </div>
                <div className="flex items-center justify-center mb-4 text-center">
                  <p className="text-sm text-white">
                    Sends SMS alerts to employees about pickup times, vehicle
                    details, and trip updates, ensuring clear communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
