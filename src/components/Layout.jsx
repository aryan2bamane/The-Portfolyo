import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ScrollProgressBar from "./ScrollProgressBar";
import RightBanner from "./RightBanner";
import MobileNav from "./Navbar/MobileNav";
import UserContext from "../context/userContext";

const Layout = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const { isFullWidth, setFullWidth } = useContext(UserContext);
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
        <div
          id="outlet"
          className="h-[90vh] w-full overflow-y-auto overflow-x-hidden"
        >
          <Outlet />
        </div>
        <div id="scrollBarHolder" className="overflow-y-auto">
          {isDesktop && <ScrollProgressBar />}
        </div>
        <div id="rightsection" className="overflow-y-hidden h-full">
          {/* {isDesktop && <ScrollProgressBar />} */}

          {isDesktop && !isFullWidth ? (
            <div className="w-0 lg:w-[30vw] mr-40">
              <RightBanner />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Layout;
