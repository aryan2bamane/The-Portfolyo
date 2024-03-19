import React, { useContext } from "react";
import UserContext from "../context/userContext";

import Year from "../components/Year";
const Work = () => {
  const { userData, isLoading, error } = useContext(UserContext);
  // const sortedEdu = hardSkills.sort((a, b) => a.sequence - b.sequence);

  const sortedJobs = userData.user.timeline.sort(
    (a, b) => a.sequence - b.sequence
  );
  return (
    <>
      {!isLoading && userData && userData.user.timeline ? (
        <div className="flex flex-col gap-5">
          {sortedJobs.map((job) => (
            <div className="flex ">
              <div className="h-full flex flex-col justify-center items-center">
                <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] relative left-1"></div>
                <div className="w-[2px] h-full bg-[#e9e9e9]"></div>
              </div>
              <div key={job._id} className=" w-full ">
                <div className="flex gap-5">
                  <p className="">
                    {job.company_name} as {job.jobTitle}
                  </p>

                  <p>
                    <Year fullDate={job.startDate} />-
                    <Year fullDate={job.endDate} />
                  </p>
                </div>

                <p className="text-slate-500">
                  {job.forEducation ? "Intern" : "Employee"}
                </p>

                <ul>
                  {job.bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Work;
