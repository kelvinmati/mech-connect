import React from "react";
import mechanic from "../assets/mechanic_pic.jpg";

import accident from "../assets/accident.jpg";
const Services = () => {
  return (
    <div id="services" className="md:py-20 py-10">
      <h2 className="text-3xl font-bold my-7 w-mobile md:w-medium mx-auto">
        Our Awesome Services
      </h2>
      <div className=" bg-gradient-to-r from-[#1c185b]   via-[#2e299c] to-[#1e1a74]  text-white grid md:grid-cols-2">
        <div className="md:h-[300px] h-full space-y-6 w-full bg-white ">
          <img className="h-full w-full object-cover" src={mechanic} alt="" />
        </div>
        <div className="md:h-[300px] h-full space-y-6  py-4 w-mobile md:w-medium  mx-auto flex flex-col justify-evenly">
          <div>
            <div className="flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <h2 className="text-xl font-bold">Get a mechanic</h2>
            </div>
            <p className="text-gray-200">
              We offer the best way to get access to qualified and proffesional
              mechanics.
            </p>
          </div>
          <div>
            <div className="flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>

              <h2 className="text-xl font-bold">Satisfactory services</h2>
            </div>
            <p className="text-gray-200">
              We ensure you get served with services you request.
            </p>
          </div>
        </div>
        <div className="md:h-[300px] h-full space-y-6  py-4 w-mobile md:w-[73%]  mx-auto flex flex-col justify-evenly">
          <div>
            <div className="flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <h2 className="text-xl font-bold">Easy,No Hassle</h2>
            </div>
            <p className="text-gray-200">
              Get connected instantly to the nearest and available mechanic who
              is qualified to handle your specific car make & model
            </p>
          </div>
          <div>
            <div className="flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-yellow-400 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>

              <h2 className="text-xl font-bold">Keep track</h2>
            </div>
            <p className="text-gray-200">
              Mech connect keeps history of your mechanical issues & repairs.
            </p>
          </div>
        </div>
        <div className="md:h-[300px] h-full space-y-6 w-full bg-white ">
          <img className="h-full w-full object-cover" src={accident} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
