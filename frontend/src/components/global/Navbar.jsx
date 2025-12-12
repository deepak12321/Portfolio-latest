import React from "react";
import { Link } from "react-router-dom";
import navLogoDark from "/assets/navLogoDark.svg";
import "../../stylings/navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {


  return (
    <>
      <div className="main-navbar-container fixed top-1 bg-transparent z-2">
        <div className="sub-navbar-container h-10 md:h-17 w-screen flex items-center justify-between px-4 md:px-10 bg-transparent">
          <div className="navbar-image ">
            <img
              className=" h-9 mt-5 md:mt-0 md:h-15"
              src={navLogoDark}
              alt="logo"
            />
          </div>
          <div className="link-container rounded-full md:text-2xl px-6 mt-4 md:w-75 w-50 h-[80%] text-white flex items-center tracking-widest font-bold justify-between uppercase ">
            <Link
              className=" hover:text-violet-950 active:text-blue-800"
              to="/"
            >
              Home
            </Link>
            <Link
              className=" hover:text-violet-950 active:text-blue-800"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
