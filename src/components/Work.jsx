import React, { useContext } from "react";
import UserContext from "../context/userContext";

import NewDate from "./NewDate";
const Work = () => {
  const { userData, isLoading, error } = useContext(UserContext);
  // const sortedEdu = hardSkills.sort((a, b) => a.sequence - b.sequence);

  const sortedJobs = userData.user.timeline.sort(
    (a, b) => a.sequence - b.sequence
  );
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center w-full pl-5  gap-5">
        <p className="font-semibold text-[24px]">Work:</p>
        <div className="flex w-full items-center">
          <div className="w-full h-1 bg-[#e9e9e9]"></div>
          <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] "></div>
        </div>
      </div>
      <div className="w-full">
        {!isLoading && userData && userData.user.timeline ? (
          <div className="flex flex-col gap-5 ml-10">
            {sortedJobs.map((job) => (
              <div className="flex ">
                <div className="h-full flex flex-col justify-center items-center">
                  <div className="w-3 h-3 mr-2 rounded-full bg-[#f44336] relative left-1"></div>
                  <div className="w-[2px] h-full bg-[#e9e9e9]"></div>
                </div>
                <div key={job._id} className=" w-full pl-5">
                  <div className="flex w-full gap-5">
                    <p className=" font-semibold">
                      {job.company_name} as {job.jobTitle}
                    </p>

                    <p className=" flex">
                      <NewDate endDate={job.startDate} />-
                      <NewDate endDate={job.endDate} />
                    </p>
                  </div>

                  <p className="text-slate-500">
                    {job.forEducation ? "Intern" : "Employee"}
                  </p>

                  <ul>
                    {job.bulletPoints.map((point, index) => (
                      <li key={index} className="pl-5 list-disc ml-5">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Work;
