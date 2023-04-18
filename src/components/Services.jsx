import React from "react";
import mockup from "../assets/mockup.jpeg";
const Services = () => {
  return (
    <div id="services" className="py-10">
      {/* <h2 className="text-xl font-bold">Our Awesome Services</h2> */}
      <div className="w-mobile md:w-medium mx-auto">
        <h2 className="text-3xl font-bold my-7">Our Awesome Services</h2>
        <div className="grid md:grid-cols-4  gap-10">
          <div className="space-y-2 flex flex-col items-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-my_blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </p>
            <h2 className="text-lg text-my_blue font-bold">
              Mechanical problems
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. ectus
              beatae. In, error temporibus.
            </p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-my_blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </p>
            <h2 className="text-lg text-my_blue font-bold">
              Mechanical problems
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. ectus
              beatae. In, error temporibus.
            </p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-my_blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </p>
            <h2 className="text-lg text-my_blue font-bold">
              Mechanical problems
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. ectus
              beatae. In, error temporibus.
            </p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-my_blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </p>
            <h2 className="text-lg text-my_blue font-bold">
              Mechanical problems
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. ectus
              beatae. In, error temporibus.
            </p>
          </div>
        </div>
      </div>

      {/* <div>ROW 1</div>
      <div>
        <div className="">
          <img src={mockup} alt="" />
        </div>
      </div>
      <div>
        {" "}
        <div>
          <img src={mockup} alt="" />
        </div>
      </div>
      <div>ROW 4</div> */}
    </div>
  );
};

export default Services;
