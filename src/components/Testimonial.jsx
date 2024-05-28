// src/Testimonial.jsx
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    position: "CEO, Company",
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Jane Smith",
    position: "CTO, Another Company",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Robert Brown",
    position: "Manager, Some Company",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonail">  
    <div className="relative py-12 px-4 md:px-8 lg:px-16 mb-14">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#012555]"></div>
      <div className="relative max-w-6xl mx-auto">
        <h4 className="text-xl font-bold text-center text-white">
          This is Our Inspiration
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          What Our Customer Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 relative z-10"
            >
              <div className="flex justify-center mb-4">
                <FaQuoteLeft className="text-4xl text-gray-300" />
              </div>
              <p className="text-gray-700 mb-4 text-center">
                {testimonial.quote}
              </p>
              <div className="flex justify-center mb-4">
                <IoMdPerson className="w-12 h-12 " />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {testimonial.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Testimonial;
