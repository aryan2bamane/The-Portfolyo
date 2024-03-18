import React from "react";
// import Container from "./Container";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ScrollProgressBar from "./ScrollProgressBar";
import RightBanner from "./RightBanner";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <div className="flex flex-col ">
        <Navbar />
        <div className="flex h-full">
          <Sidebar />
          <div className="flex  pt-24 ml-24 w-[71vw] justify-center items-center ">
            <div className="w-full font-[600] ">
              <Outlet />
              <Footer />
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
