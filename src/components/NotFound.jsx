import React from "react";
import StringDesign from "./StringDesign";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center h-full">
        <StringDesign />
        {/* Intro */}
        <div className="py-20 lg:py-0 mx-auto flex flex-col items-center gap-10">
          <div>Page Not Found</div>
          <div className=" text-[50px] font-[Outfit] lg:text-[92px]  font-semibold text-center">
            <p>404</p>
          </div>
          <div className=" font-[Outfit]  text-center">
            OOPS! SOMETHING WENT WRONG :(
          </div>
        </div>
        <div>
          <div className="w-44 h-28 pb-20 rounded-t-full pt-20 bg-[#2021241a] flex flex-col gap-5 justify-center items-center">
            {" "}
            <NavLink
              to="/"
              className="mil-link mil-icon-link bg-[#f44336] w-10 h-10 rounded-full p-2 text-white scale-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-right rotate-180 "
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </NavLink>
            <p>Back To Homepage</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
