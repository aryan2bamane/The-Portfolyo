import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#202121] text-white flex justify-between w-full  h-24 items-center fixed top-0">
      <div className="bg-[#FF4A3B] text-white h-full w-24 flex justify-center items-center">Logo</div>
      <div>
        <ul className="flex gap-x-14">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact-me">Contact</Link>
          </li>
          <li>
            <Link to="/story">Other</Link>
          </li>
        </ul>
      </div>
      <div className="bg-[#FF4A3B] text-white h-full w-24 flex justify-center items-center">Message</div>
    </div>
  );
};

export default Navbar;
