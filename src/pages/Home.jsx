import React, { useContext } from "react";
import UserContext from "../context/userContext";
import LanguageSkills from "../components/LanguageSkills";
import Services from "../components/Services";
import HardSkills from "../components/HardSkills";

const Home = () => {
  const { userData, isLoading, error } = useContext(UserContext);
  const userName = userData.user.about.name;
  const userTitle = userData.user.about.title;
  const userSubTitle = userData.user.about.subTitle;
  const userPic = userData.user.about.avatar.url;
  const userAddress = userData.user.about.address;
  const userDesc = userData.user.about.description;
  const userService = userData.user.services;

  return (
    <div>
      {/* First */}
      <div className=" px-24 flex flex-col items-center gap-20">
        <div className="flex flex-col items-center">
          <div className="w-[2px] h-32 bg-[#e9e9e9]"></div>
          <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] relative left-1"></div>
        </div>
        {/* Intro */}
        <div className="mx-auto flex flex-col items-center gap-10">
          <div>HELLO! MY NAME IS</div>
          <div className="w-min font-[Outfit] text-[92px] leading-[92px] font-semibold text-center">
            <p>{isLoading ? null : userName}</p>
          </div>
          <div className=" font-[Outfit]  text-center">
            <p>{isLoading ? null : userTitle}</p>
          </div>
        </div>
        <div className="w-44 h-56 rounded-t-full pt-6 bg-[#2021241a]"></div>
      </div>
      {/* Second */}
      {/* About */}
      <div className="overflow-y-auto px-24 flex flex-col items-center gap-10 h-[89vh]">
        {/* ROUNDED IMAGE */}
        <div className="w-44 h-56 rounded-b-full pb-6 bg-[#2021241a] flex items-center justify-center">
          <div className="rounded-full h-32 w-32 overflow-hidden">
            <img src={isLoading ? null : userPic} alt="" />
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="leading-[120%] font-[600] text-[43.6px] text-center">
            Hi! My name is {isLoading ? null : userName},
            {isLoading ? null : userSubTitle}
            <br /> based in {isLoading ? null : userAddress}
          </p>
        </div>

        {/* Qoute */}
        <div className="h-10 w-10 bg-[#f44336] rounded-full  flex items-center justify-center text-white text-4xl pt-4">
          <p>"</p>
        </div>

        {/* Description */}
        <div className="text-center px-32">
          <p>{isLoading ? null : userDesc}</p>
        </div>

        {/* Services */}
        {userData.user.services ? (
          <>{userData.user.services ? <Services /> : null}</>
        ) : null}

        {/* Laguage Skills*/}
        {userData.laguage ? <LanguageSkills /> : null}

        {/* Hard Skills*/}
        {userData.user.skills ? <HardSkills /> : null}
      </div>
    </div>
  );
};

export default Home;
