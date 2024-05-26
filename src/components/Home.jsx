import React from "react";
import Process from "./Process";
import About from "./About";
import Feature from "./Feature";
import Values from "./Values";
import Testimonial from "./Testimonial";
import Why from "./Why";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen bg-cover bg-center bg-main-image">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Manage your own <br />
            transportation.
          </h1>
          <p className="text-white text-lg md:text-2xl mb-8">
            Safety, quality, professionalism
          </p>
          <button className="bg-blue-500 text-white text-lg md:text-xl py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
            Show More
          </button>
        </div>
      </div>
      <Process />
      <About />
      <Feature />
      <Values />
      <Testimonial />
      <Why />
      <Footer />
    </div>
  );
};

export default Home;
