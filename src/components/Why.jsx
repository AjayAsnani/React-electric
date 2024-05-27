import React from "react";
import whyImage from "../../public/whymain.webp";
import rightImage from "../../public/why1.jpg";
import { BsBuildings } from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";
import { FaCar } from "react-icons/fa";

const Why = () => {
  return (
    <div>
      <div
        className="relative flex items-center justify-center p-6 md:p-20  bg-cover bg-center mt-16"
        style={{ backgroundImage: `url(${whyImage})` }}
      >
        <div className="bg-white bg-opacity-90 p-4 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto">
          <div className="md:w-1/2 p-4">
            <h4 className="text-xl font-bold  text-blue-500">
              A trading of trust
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Why Choose Us
            </h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-[#011c3a] transition duration-300">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 p-4 flex justify-center">
            <img
              src={rightImage}
              alt="Why Image"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-bold text-center">
          Global mobility ecosystem driving communities forward
        </h1>
        <div className="flex items-center justify-around mt-8">
          <BsBuildings className="h-[70px] w-auto md:h-[100px]" />
          <VscGraphLine className="h-[70px] w-auto md:h-[100px]" />
          <FaCar className="h-[70px] w-auto md:h-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default Why;
