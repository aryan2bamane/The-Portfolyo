import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
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

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#202121] text-white w-full h-24 fixed top-0 z-50 flex justify-between items-center">
      <NavLink className={"h-24"}>
        <div className="bg-[#FF4A3B] text-white h-full w-24 flex justify-center items-center">
          <p className="text-6xl font-semibold">C</p>
          <p className="text-7xl relative right-5 bottom-5">.</p>
        </div>
      </NavLink>

      <div className="absolute top-6 right-3  flex justify-center items-center gap-5">
        <NavLink to={"/contact-me"}>
          <img src="/icons8-envelope-100.png" alt="" className="w-10" />
        </NavLink>

        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="30"
            viewBox="0 0 26 26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=""
          >
            <path d="M21 12H3" />
            <path d="M21 4H3" />
            <path d="M21 20H3" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-[#202121] text-white">
          <ul className="flex flex-col gap-y-2 p-4">
            <li>
              <CustomNavLink to="/" onClick={closeMenu}>
                Home
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/projects" onClick={closeMenu}>
                Projects
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/blog" onClick={closeMenu}>
                Blog
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/contact-me" onClick={closeMenu}>
                Contact
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/story" onClick={closeMenu}>
                Other
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/services" onClick={closeMenu}>
                Services
              </CustomNavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
