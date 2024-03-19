import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
    <div className="bg-[#202121] text-white w-full h-24 items-center fixed top-0 z-50">
      <div className="bg-[#FF4A3B] text-white h-full w-24 flex justify-center items-center">
        Logo
      </div>
      <div className="absolute top-0 right-0 mr-4 mt-2">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
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
