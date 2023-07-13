import React, { useEffect, useState } from "react";
import logo from "../../src/assets/MECH_CONNECT-02-removebg-preview.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }
    });
  }, []);
  // sidebar toggle
  const [sidebar, setSidebar] = useState(false);

  return (
    <div
      className={
        isNavbarScrolled
          ? "fixed w-full bg-gradient-to-r from-[#1c185b]   via-[#2e299c] to-[#1e1a74] z-30 top-0 h-[80px]    transition-all duration-300 "
          : "h-[70px] py-14  transition-all duration-300 relative z-30"
      }
      // className={
      //   isNavbarScrolled
      //     ? "fixed w-full  z-30 top-0 h-[80px] bg-white   transition-all duration-300 "
      //     : "h-[70px] py-14  transition-all duration-300 bg-white relative z-30"
      // }
    >
      <div className=" h-full  flex  justify-between items-center w-medium mx-auto">
        <div className="flex items-center">
          <div className="h-[100px] flex ">
            <img className="" src={logo} alt="" />
          </div>
          {/* <h2 className="text-2xl font-bold  border-l pl-5">
            MECH <br />
            CONNET{" "}
          </h2> */}
        </div>
        <div className="md:flex hidden justify-between items-center space-x-60">
          <ul className="flex space-x-4 ">
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
            <a
              target="_blank"
              href="https://play.google.com/store/search?q=mech+connect&c=apps"
            >
              <button className="py-3 px-5 rounded-full  bg-my_yellow border-none">
                Get started
              </button>
            </a>
          </div>
        </div>
        <div
          className="md:hidden block z-30"
          onClick={() => setSidebar(!sidebar)}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-12 h-12 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className={
          sidebar
            ? "bg-gradient-to-r from-[#1c185b]   via-[#2e299c] to-[#1e1a74] h-full w-full z-20 fixed top-0  md:hidden "
            : " h-full z-40 fixed top-0  hidden "
        }
      >
        <div>
          <img
            src="https://res.cloudinary.com/kelvin45/image/upload/c_scale,h_130,r_30,w_160/a_0/v1681805889/logo-transparent_yntzd5.png"
            alt=""
          />
        </div>
        <ul className="w-mobile mx-auto  flex flex-col justify-center items-center space-y-5">
          <li className="cursor-pointer">
            <Link
              onClick={() => setSidebar(false)}
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
              onClick={() => setSidebar(false)}
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
              onClick={() => setSidebar(false)}
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
              onClick={() => setSidebar(false)}
              activeClass="active"
              to="contact"
              spy={true}
              // smooth={true}
              offset={-80}
            >
              Contact
            </Link>
          </li>
          <a
            target="_blank"
            href="https://play.google.com/store/search?q=mech+connect&c=apps"
          >
            <button className="py-3 px-5 rounded-full  bg-my_yellow border-none">
              Get started
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
