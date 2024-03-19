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

      <div className="grid grid-cols-2 w-full  gap-x-5 gap-y-10">
        {userData && hardSkills ? (
          <>
            {sortedSkills.map((skill) => (
              <div className="w-full px-5" key={skill._id}>
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
