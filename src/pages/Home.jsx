import React, { useContext } from "react";
import UserContext from "../context/userContext";
import LanguageSkills from "../components/LanguageSkills";
import Services from "../components/Services";
import HardSkills from "../components/HardSkills";
import Reviews from "../components/Reviews";
import LatestBlogs from "../components/LatestBlogs";
import StringDesign from "../components/StringDesign";
import ContactCard from "../components/ContactCard";

const Home = () => {
  const { userData, isLoading, error } = useContext(UserContext);
  const userName = userData.user.about.name;
  const userTitle = userData.user.about.title;
  const userSubTitle = userData.user.about.subTitle;
  const userPic = userData.user.about.avatar.url;
  const userAddress = userData.user.about.address;
  const userDesc = userData.user.about.description;

  return (
    <div>
      <div className="  flex flex-col items-center gap-20 h-full">
        <StringDesign />
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
        {/* <div className="h-1 bg-[#e9e9e9] relative top-36" id="more"></div> */}
        <div>
          <div className="w-44 h-28 rounded-t-full p-6 bg-[#2021241a] flex justify-center items-center">
            {" "}
            <a href="#more">More</a>
          </div>
          <div className="w-44 h-28 bg-[#2021241a]" id="more"></div>
          <div className="w-44 h-40 rounded-b-full pb-6 bg-[#2021241a] flex items-center justify-center">
            <div className="rounded-full h-32 w-32 overflow-hidden">
              <img src={isLoading ? null : userPic} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Second */}
      {/* About */}
      <div className=" px-24 flex flex-col items-center gap-10 ">
        {/* ROUNDED IMAGE */}

        <div className="w-full h-[50vh] flex flex-col justify-center items-center gap-16">
          {" "}
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
        </div>

        {/* Services */}
        {userData.user.services ? <Services /> : null}

        {/* Laguage Skills*/}
        {userData.laguage ? <LanguageSkills /> : null}

        {/* Hard Skills*/}
        {userData.user.skills ? <HardSkills /> : null}

        {/*Reviews*/}
        {userData.user.testimonials ? <Reviews /> : null}

        {/* Latest Blogs */}
        {userData.user.posts ? <LatestBlogs /> : null}
      </div>

      <ContactCard />
    </div>
  );
};

export default Home;
