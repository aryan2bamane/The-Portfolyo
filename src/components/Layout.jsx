import React from "react";
// import Container from "./Container";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ScrollProgressBar from "./ScrollProgressBar";
const Layout = () => {
  return (
    <>
      <div className="flex flex-col ">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="mt-24 ml-24">
            <Outlet />
          </div>
          <ScrollProgressBar />
        </div>
      </div>
    </>
  );
};

export default Layout;
