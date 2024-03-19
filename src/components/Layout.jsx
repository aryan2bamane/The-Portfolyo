import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ScrollProgressBar from "./ScrollProgressBar";
import RightBanner from "./RightBanner";
import Footer from "./Footer";
import MobileNav from "./Navbar/MobileNav";

const Layout = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1000);
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* <div className="flex flex-col">
        <Navbar />

        <div className="flex h-full">
          {isDesktop && <Sidebar />}

          <div className="w-[100vw] flex justify-center items-center pt-24 ml-24 lg:w-[65vw]">
            <div className="w-full font-[600]">
              <Outlet />
              <Footer />
            </div>
          </div>

          {isDesktop && <ScrollProgressBar />}
          {isDesktop && <RightBanner />}
        </div>
      </div> */}

      {isDesktop ? <Navbar /> : <MobileNav />}
      <div
        id="Main"
        className="mt-24 flex w-screen justify-between fixed bottom-0"
      >
        {isDesktop && (
          <div className="w-24">
            <Sidebar />
          </div>
        )}
        <div id="outlet" className="h-[90vh] w-full overflow-y-auto">
          <Outlet />
        </div>
        <div id="scrollBarHolder" className="overflow-y-auto">
          {isDesktop && <ScrollProgressBar />}
        </div>
        <div id="rightsection" className="overflow-y-hidden h-full">
          {/* {isDesktop && <ScrollProgressBar />} */}

          {isDesktop && (
            <div className="w-0 lg:w-[30vw] mr-40">
              <RightBanner />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Layout;
