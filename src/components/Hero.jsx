import React, { useState } from "react";
import playstore from "../assets/playstore.png";
import mockup from "../assets/mockup-removebg.png";

import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      id="home"
      className=" text-white bg-gradient-to-r from-[#1c185b]   via-[#2e299c] to-[#1e1a74]  pb-10 "
    >
      <Navbar />

      <div className="w-medium mx-auto grid md:grid-cols-2 md:gap-5  items-center ">
        <div>
          <h2 className="md:text-7xl text-5xl font-bold md:mb-5 mt-12 ">
            Welcome to Mech Connect
          </h2>
          <p className="text-lg">Convenient & efficient everywhere</p>
          <a
            target="_blank"
            href="https://play.google.com/store/search?q=mech+connect&c=apps"
          >
            <button>
              <img className="h-36 flex" src={playstore} alt="" />
            </button>
          </a>
        </div>
        <div>
          <div>
            <img className=" " src={mockup} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
