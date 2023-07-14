import React from "react";

import { Link } from "react-scroll";
// import logo from "../../src/assets/mechconnectwhite-removebg-preview.png";
import logo from "../../src/assets/MECH_CONNECT-02-removebg-preview.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-3  ">
      <div className="w-mobile md:w-medium mx-auto   flex   justify-between items-center">
        <div>
          {/* <img
            src="https://res.cloudinary.com/kelvin45/image/upload/c_scale,h_80,w_233/v1687350046/logo-transparent_lu37bu.jpg"
            alt=""
          /> */}
          <div className=" h-24 flex">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="">
          <p>
            &copy; {new Date().getFullYear()}.
            <span className="text-yellow-500">Mech Connect</span> All rights
            reserved
          </p>
        </div>
        <div className="">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            // smooth={true}
            offset={-80}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 p-1.5 bg-my_yellow  rounded-md cursor-pointer "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
