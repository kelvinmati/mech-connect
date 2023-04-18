import React, { useEffect, useState } from "react";
import logo from "../assets/logo-transparent.png";
// import logo from "../assets/logo-background.jpg";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        // console.log(window.scrollY);
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }
    });
  }, []);

  return (
    <div
      className={
        isNavbarScrolled
          ? "fixed w-full bg-gradient-to-r from-[#1c185b]   via-[#2e299c] to-[#1e1a74] z-50 top-0 h-[80px]   transition-all duration-300 "
          : "h-[70px] py-14  transition-all duration-300"
      }
    >
      <div className=" h-full  flex  justify-between items-center w-medium mx-auto">
        <div>
          <img
            src={
              isNavbarScrolled
                ? "https://res.cloudinary.com/kelvin45/image/upload/c_scale,h_105,r_30,w_115/a_0/v1681805889/logo-transparent_yntzd5.png "
                : "https://res.cloudinary.com/kelvin45/image/upload/c_scale,h_125,r_30,w_130/a_0/v1681805889/logo-transparent_yntzd5.png"
            }
            alt=""
          />
        </div>
        <div className="md:flex hidden justify-between items-center space-x-60">
          <ul className="flex space-x-4  ">
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                // smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                // smooth={true}
                offset={-80}
              >
                Services
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                // smooth={true}
                offset={-80}
              >
                About us
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                // smooth={true}
                offset={-80}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <button className="py-3 px-5 rounded-full  bg-my_yellow border-none">
              Get started
            </button>
          </div>
        </div>
        <div className="md:hidden block">
          {" "}
          <div className="flex-none">
            <button className="btn btn-square btn-ghost ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-7 h-7 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
