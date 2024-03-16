import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import ScrollProgressBar from "../components/ScrollProgressBar";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Layout />
        <ScrollProgressBar />
      </div>
    </div>
  );
};

export default Home;
