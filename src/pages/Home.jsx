import React, { useContext } from "react";
import UserContext from "../context/userContext";
import HardSkills from "../components/HardSkills";
import Reviews from "../components/Reviews";
import LatestBlogs from "../components/LatestBlogs";
import StringDesign from "../components/StringDesign";
import ContactCard from "../components/ContactCard";
import SectionHeading from "../components/SectionHeading";
import AllServices from "../components/AllServices";
import Caroausel1 from "../components/Caroausel1";

const Home = () => {
  const { userData, isLoading, error } = useContext(UserContext);
  const userName = userData.user.about.name;
  const userTitle = userData.user.about.title;
  const userSubTitle = userData.user.about.subTitle;
  const userPic = userData.user.about.avatar.url;
  const userAddress = userData.user.about.address;
  const userDesc = userData.user.about.description;
  const userReview = userData.user.testimonials;
  // console.log(userReview);

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
          <div className="w-44 h-28 rounded-t-full pt-20 bg-[#2021241a] flex justify-center items-center">
            {" "}
            {/* <a href="#more">More</a> */}
            <a
              href="#more"
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
                className="feather feather-arrow-right rotate-90 "
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          <div className="w-44 h-28 bg-[#2021241a]" id="more"></div>
          <div className="w-44 h-40 rounded-b-full pb-6 bg-[#2021241a] flex items-center justify-center">
            {/* ROUNDED IMAGE */}
            <div className="rounded-full h-32 w-32 overflow-hidden">
              <img src={isLoading ? null : userPic} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Second */}
      {/* About */}
      <div className=" px-24 flex flex-col items-center gap-10 ">
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
            <p>“</p>
          </div>
          {/* Description */}
          <div className="text-center px-32">
            <p>{isLoading ? null : userDesc}</p>
          </div>
        </div>

        {/* Services */}
        <SectionHeading heading="Services" />
        {userData.user.services ? <AllServices /> : null}

        {/* Laguage Skills*/}
        {/* {userData.laguage ? <LanguageSkills /> : null} */}

        {/* Hard Skills*/}
        {userData.user.skills ? <HardSkills /> : null}

        {/* Reviews
        <div className="w-50vw">
          {userData.user.testimonials ? (
            <Reviews testimonials={userReview} />
          ) : null}
        </div> */}

        <Caroausel1 />

        {/* Latest Blogs */}
        {userData.user.posts ? <LatestBlogs /> : null}
      </div>

      <ContactCard />
    </div>
  );
};

export default Home;
