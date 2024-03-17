import React from "react";
// import Container from "./Container";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ScrollProgressBar from "./ScrollProgressBar";
import RightBanner from "./RightBanner";
const Layout = () => {
  return (
    <>
      <div className="flex flex-col ">
        <Navbar />
        <div className="flex h-full">
          <Sidebar />
          <div className="flex pt-24 ml-24 w-full ">
            <div className="w-4/6 overflow-y-auto pr-10">
              <Outlet />
            </div>
          </div>
          <ScrollProgressBar />
          <RightBanner />
        </div>
      </div>
    </>
  );
};

export default Layout;
