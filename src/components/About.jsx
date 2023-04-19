import React from "react";
import mockup from "../assets/mockup-bg.jpeg";
import playstore from "../assets/playstore.png";
const About = () => {
  return (
    <div id="about" className="md:py-14 pb-0 md:pb-16  relative">
      <div className="w-mobile md:w-medium mx-auto grid md:grid-cols-2 md:gap-0 gap-7 items-center z-50">
        <div className="md:h-[600px] md:w-[500px] w-full bg-my_yellow rounded-md">
          <img className="h-full w-full rounded-md" src={mockup} alt="" />
        </div>
        <div className="space-y-3">
          <h2 className="text-5xl font-bold">Make Money Online</h2>
          <p>
            Download MechConnect on google playstore and sign up as a mechanic
            to get connected to clients near you.
          </p>

          <a
            target="_blank"
            href="https://play.google.com/store/search?q=mech+connect&c=apps"
          >
            <button>
              <img className="h-36 flex" src={playstore} alt="" />
            </button>
          </a>
        </div>
      </div>
      <div className="hidden md:block bg-gray-100 absolute top-[25%] h-[350px] w-full -z-10 "></div>
    </div>
  );
};

export default About;
