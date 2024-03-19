import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block py-2 pr-4 pl-3 duration-200 ${
          isActive ? "text-[#FF4A3B]" : "text-white"
        } `
      }
    >
      {children}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <div id="NavBar" className="bg-[#202121] text-white flex justify-between w-full h-24 items-center fixed top-0 z-50">
      <div className="bg-[#FF4A3B] text-white h-full w-24 flex justify-center items-center">
        Logo
      </div>
      <div>
        <ul className="flex gap-x-14">
          <li>
            <CustomNavLink to="/">Home</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/projects">Projects</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/blog">Blog</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/contact-me">Contact</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/story">Other</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/services">Services</CustomNavLink>
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
