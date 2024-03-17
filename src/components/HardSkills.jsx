import React, { useContext } from "react";
import UserContext from "../context/userContext";

const HardSkills = () => {
  const {
    userData,
    isLoading,
    error,
    // userName,
    // userTitle,
    // userSubTitle,
    // userPic,
    // userAddress,
    // userDesc,
    // userService,
  } = useContext(UserContext);
  const hardSkills = userData.user.skills;
  const sortedSkills = hardSkills.sort((a, b) => a.sequence - b.sequence);

  return (
    <>
      <div className="flex justify-center ">
        <div className="flex flex-row-reverse items-center pr-10 ">
          <div className="h-[2px] w-80 bg-[#e9e9e9]"></div>
          <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] relative left-2"></div>
        </div>
        <p className="leading-[28.8px] text-[24px] mx-5 font-[600]">
          HardSkills
        </p>
        <div className="flex  items-center pl-10">
          <div className="h-[2px] w-80 bg-[#e9e9e9]"></div>
          <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] relative right-1"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 w-full py-10 gap-5">
        {userData && hardSkills ? (
          <>
            {sortedSkills.map((skill) => (
              <div className="w-full bg-[#e9e9e9] h-[10vh]" key={skill._id}>
                {skill.name}
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
};

export default HardSkills;
