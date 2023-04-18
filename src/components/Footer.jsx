import React from "react";
import logo from "../assets/logo-transparent.png";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="bg-black text-white  ">
      <div className="w-mobile md:w-medium mx-auto   md:flex  block justify-between items-center">
        {/* <div className=" w-32 bg-black ">
          <img src={logo} alt="" />
        </div> */}
        <div>
          <img
            src="https://res.cloudinary.com/kelvin45/image/upload/c_scale,h_135,r_30,w_145/a_0/v1681805889/logo-transparent_yntzd5.png"
            alt=""
          />
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
              className="w-10 h-10 p-1.5 bg-yellow-400  rounded-md cursor-pointer "
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
