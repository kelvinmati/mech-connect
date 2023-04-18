import React from "react";
import mockup from "../assets/mockup-bg.jpeg";
const About = () => {
  return (
    <div id="about" className="md:py-24 py-10 relative">
      <div className="w-mobile md:w-medium mx-auto grid md:grid-cols-2 items-center z-50">
        <div className="md:h-[600px] md:w-[500px] w-full bg-my_yellow rounded-md">
          <img className="h-full w-full rounded-md" src={mockup} alt="" />
        </div>
        <div className="space-y-3">
          <h2 className="text-my_yellow text-lg">About Mech Connect</h2>
          <h2 className="text-4xl font-bold">A study of creativity</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem cum aperiam ullam dolores natus inventore?
          </p>
          <button className="py-3 px-5 bg-my_yellow text-white  rounded-full  ">
            Contact us
          </button>
        </div>
      </div>
      <div className="hidden md:block bg-gray-100 absolute top-[25%] h-[350px] w-full -z-10 "></div>
    </div>
  );
};

export default About;
