import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Feature from "./components/Feature";
import Values from "./components/Values";
import Testimonial from "./components/Testimonial";
import Why from "./components/Why";
import Footer from "./components/Footer";
import Process from "./components/Process";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Process />
      <About />
      <Feature />
      <Values />
      <Testimonial />
      <Why />
      <Footer />
      <Login />
      <Signup />
    </div>
  );
};

export default App;
