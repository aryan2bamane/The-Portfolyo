import React, { useContext } from "react";
import UserContext from "../context/userContext";
import SectionHeading from "./SectionHeading";

const HardSkills = () => {
  const { userData } = useContext(UserContext);
  const hardSkills = userData.user.skills;
  const sortedSkills = hardSkills.sort((a, b) => a.sequence - b.sequence);
  return (
    <>
      <SectionHeading heading="Hard Skills" />

      <div className="md:grid grid-cols-2 w-full  lg:gap-x-5 lg:gap-y-10">
        {userData && hardSkills ? (
          <>
            {sortedSkills.map((skill) => (
              <div className=" py-5 lg:py-5 w-full px-5" key={skill._id}>
                <div className="flex justify-between" style={{ width: `${skill.percentage}` + "%" }}>
                  <p>{skill.name}</p>
                  <p>{skill.percentage}</p>
                </div>
                <div className="w-full bg-[#e9e9e9]">
                  <div
                    className="bg-[#f44336] h-2 "
                    style={{ width: `${skill.percentage}` + "%" }}
                  ></div>
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
};

export default HardSkills;
