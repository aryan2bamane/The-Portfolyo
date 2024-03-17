import React, { useContext } from "react";
import UserContext from "../context/userContext";

const Home = () => {
  const { userData, isLoading, error } = useContext(UserContext);
  const userName = userData.user.about.name;
  const userTitle = userData.user.about.title;
  const userPic = userData.user.about.avatar.url;
  const userAddress = userData.user.about.address;

  return (
    <>
      {/* First */}
      <div className="overflow-y-auto px-24 flex flex-col items-center gap-20 h-[89vh]">
        <div className="flex flex-col items-center">
          <div className="w-[2px] h-32 bg-[#e9e9e9]"></div>
          <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] relative left-1"></div>
        </div>
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
      <div className="overflow-y-auto px-24 flex flex-col items-center gap-20 h-[89vh]">
        <div className="w-44 h-56 rounded-b-full pt-6 bg-[#2021241a] flex items-center justify-center">
          <div className="rounded-full h-32 w-32 overflow-hidden">
            <img
              src={
                isLoading
                  ? "https://imgs.search.brave.com/adKPa-cENgjik-JUhBVxLReTBKu8UXDSuBMHmNfsLa8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mYWtl/aW1nLnBsLzQ0MHgz/MjAvMjgyODI4L2Vh/ZTBkMC8_cmV0aW5h/PTE.jpeg"
                  : userPic
              }
              alt=""
            />
          </div>
        </div>
        <div>
          <p>
            Hi! My name is {isLoading ? null : userName}, I’m{" "}
            {isLoading ? null : userTitle} based in{" "}
            {isLoading ? null : userAddress}
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
