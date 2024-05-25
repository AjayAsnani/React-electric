import React from "react";
import { MdOutlineTouchApp } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GiProcessor } from "react-icons/gi";

const Process = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-12 relative mt-[-125px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center ">
        <div className="bg-white  shadow-lg p-6  flex flex-col items-center">
          <GiProcessor className="h-[40px] w-auto" />
          <div className="flex justify-center mb-4"></div>

          <h3 className="text-xl font-bold mb-2">Certified Process</h3>

          <p className="text-gray-700">
            We drive you towards continuous improvement.
          </p>
        </div>

        <div className="bg-white  shadow-lg p-6  flex flex-col items-center">
          <MdOutlineTouchApp className="h-[40px] w-auto" />
          <div className="flex justify-center mb-4"></div>

          <h3 className="text-xl font-bold mb-2">Hight Technology</h3>

          <p className="text-gray-700">
            Provide authorization and compliance service.
          </p>
        </div>

        <div className="bg-white  shadow-lg p-6  flex flex-col items-center">
          <FaAward className="h-[40px] w-auto" />
          <div className="flex justify-center mb-4"></div>

          <h3 className="text-xl font-bold mb-2">Awarded Company</h3>

          <p className="text-gray-700">
            The best highly efficient customs brokerage.
          </p>
        </div>

        <div className="bg-white  shadow-lg p-6 flex flex-col items-center">
          <TfiHeadphoneAlt className="h-[40px] w-auto" />
          <div className="flex justify-center mb-4"></div>

          <h3 className="text-xl font-bold mb-2">24/7 Support</h3>

          <p className="text-gray-700">
            We care for security of the packages transport.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
