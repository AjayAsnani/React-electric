// src/About.jsx
import React from "react";
import aboutImage from "../../public/about.jpg"; // Ensure you have an image in the assets directory

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col lg:flex-row items-center justify-center mb-14 py-12 px-4 md:px-8 lg:px-16 relative">
        <div className="w-full lg:w-1/2 p-4 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg md:text-xl mb-4">
            We are committed to providing the best products and services to our
            customers. Our team of experts works tirelessly to meet your needs
            and exceed your expectations. With years of experience in the
            industry, we have honed our skills and knowledge to deliver
            top-notch solutions that are tailored to your specific requirements.
            Our mission is to create value for our customers by offering
            innovative products that improve their lives and businesses. We
            believe in the power of collaboration and strive to build long-term
            relationships with our clients, partners, and stakeholders. Through
            continuous improvement and a focus on quality, we aim to be the
            trusted choice for all your needs.
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-4 md:p-8 relative">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute top-[18rem] left-0 p-4">
            <div className="flex items-center">
              <div className="mr-4 bg-blue-500 text-white text-lg md:text-xl py-3 px-4 rounded">
                <span className="text-4xl font-bold">00</span>
              </div>
              <div className="bg-white p-2 w-[300px]">
                <h3 className="text-xl font-semibold mb-0 p-0">
                  Years of Experience
                </h3>
                <p className="text-sm">Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
