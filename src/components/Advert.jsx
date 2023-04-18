import React from "react";
import advert_img from "../assets/dark-iphone-mockup.png";
const Advert = () => {
  return (
    <div className=" bg-gray-50  py-16">
      <div className="w-mobile md:w-medium mx-auto  grid md:grid-cols-2 justify-center   items-center relative h-[300px]">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">
            You Wanna Get a Mechanic Instantly??
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            ratione!
          </p>
          <button className="px-14 py-3 bg-my_yellow text-white rounded-full  flex space-x-5">
            <span> Get App</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
        <div></div>
        <div className="absolute right-0 -top-52">
          <img src={advert_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Advert;
// bg-[#1d1d1d]
