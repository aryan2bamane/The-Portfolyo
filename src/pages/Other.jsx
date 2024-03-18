import React, { useContext } from "react";
import UserContext from "../context/userContext";
import StringDesign from "../components/StringDesign";
import ContactCard from "../components/ContactCard";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import Year from "../components/Year";

const Other = () => {
  const { userData, isLoading, error } = useContext(UserContext);
  // const sortedEdu = hardSkills.sort((a, b) => a.sequence - b.sequence);

  const sortedJobs = userData.user.timeline.sort(
    (a, b) => a.sequence - b.sequence
  );
  console.log(sortedJobs);

  return (
    <div className="  flex flex-col items-center gap-10 h-full">
      <Year fullDate={sortedJobs[0].startDate} />
      <StringDesign />
      <div className="gap-5 flex flex-col items-center w-full">
        <PageTitle title="Success Story" />
        <PageSubTitle title="Success Story" />
      </div>
      <div className="flex w-full ">
        <>
          {!isLoading && userData && userData.user.education ? (
            <div></div>
          ) : null}
        </>
        <>
          {!isLoading && userData && userData.user.timeline ? (
            <div className="flex flex-col gap-20">
              {sortedJobs.map((job) => (
                <div>
                  <div key={job._id} className="flex flex-col w-full gap-1">
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
      </div>
      <ContactCard />
    </div>
  );
};

export default Other;
