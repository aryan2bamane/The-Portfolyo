import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#202121] text-white flex justify-between w-full  h-24 items-center fixed top-0 z-50">
      <div className="bg-[#FF4A3B] text-white h-full w-24 flex justify-center items-center">
        Logo
      </div>
      <div>
        <ul className="flex gap-x-14">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#FF4A3B]" : "text-white"
                } `
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#FF4A3B]" : "text-white"
                } `
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#FF4A3B]" : "text-white"
                } `
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-me"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#FF4A3B]" : "text-white"
                } `
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/story"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#FF4A3B]" : "text-white"
                } `
              }
            >
              Other
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="bg-[#FF4A3B] text-white h-full w-24 flex justify-center items-center">
        Message
      </div>
    </div>
  );
};

export default Navbar;
