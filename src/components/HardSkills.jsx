import React, { useContext } from "react";
import UserContext from "../context/userContext";
import SectionHeading from "./SectionHeading";

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
      <SectionHeading heading="Hard Skills" />

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
