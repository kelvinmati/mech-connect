import React from "react";
import mockup from "../assets/mockup.jpeg";
import mechanic from "../assets/mechanic_pic.jpg";

import accident from "../assets/accident.jpg";
const Services = () => {
  return (
    // <div id="services" className="py-10 ">
    //   <div className="w-mobile md:w-medium mx-auto">
    //     <h2 className="text-3xl font-bold my-7">Our Awesome Services</h2>
    //     <div className="grid md:grid-cols-4  gap-10">
    //       <div className="space-y-2 flex flex-col items-center">
    //         <p>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="w-10 h-10 text-my_blue"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    //             />
    //           </svg>
    //         </p>
    //         <h2 className="text-lg text-my_blue font-bold">
    //           Mechanical problems
    //         </h2>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. ectus
    //           beatae. In, error temporibus.
    //         </p>
    //       </div>
    //       <div className="space-y-2 flex flex-col items-center">
    //         <p>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="w-10 h-10 text-my_blue"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    //             />
    //           </svg>
    //         </p>
    //         <h2 className="text-lg text-my_blue font-bold">
    //           Mechanical problems
    //         </h2>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. ectus
    //           beatae. In, error temporibus.
    //         </p>
    //       </div>
    //       <div className="space-y-2 flex flex-col items-center">
    //         <p>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="w-10 h-10 text-my_blue"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    //             />
    //           </svg>
    //         </p>
    //         <h2 className="text-lg text-my_blue font-bold">
    //           Mechanical problems
    //         </h2>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. ectus
    //           beatae. In, error temporibus.
    //         </p>
    //       </div>
    // <div className="space-y-2 flex flex-col items-center">
    //   <p>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="w-10 h-10 text-my_blue"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    //       />
    //     </svg>
    //   </p>
    //   <h2 className="text-lg text-my_blue font-bold">
    //     Mechanical problems
    //   </h2>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. ectus
    //     beatae. In, error temporibus.
    //   </p>
    // </div>
    //     </div>
    //   </div>
    // </div>
    <div id="services" className="py-20">
      <h2 className="text-3xl font-bold my-7 w-mobile md:w-medium mx-auto">
        Our Awesome Services
      </h2>
      <div className=" bg-gradient-to-r from-[#1c185b]   via-[#2e299c] to-[#1e1a74]  text-white grid grid-cols-2">
        <div className="h-[300px] w-full bg-white ">
          <img className="h-full w-full object-cover" src={mechanic} alt="" />
        </div>
        <div className="h-[300px]  py-4 w-mobile md:w-medium  mx-auto flex flex-col justify-evenly">
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
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
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
                className="w-8 h-8 text-yellow-400 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>

              <h2 className="text-xl font-bold">Satisfactory services</h2>
            </div>
            <p className="text-gray-200">
              We ensure you get served with services you request.
            </p>
          </div>
        </div>
        <div className="h-[300px]  py-4 w-mobile md:w-[73%]  mx-auto flex flex-col justify-evenly">
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
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
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
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>

              <h2 className="text-xl font-bold">Keep track</h2>
            </div>
            <p className="text-gray-200">
              Mech connect keeps history of your mechanical issues & repairs.
            </p>
          </div>
        </div>
        <div className="h-[300px] w-full bg-white ">
          <img className="h-full w-full object-cover" src={accident} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
