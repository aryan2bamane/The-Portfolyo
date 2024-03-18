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

  const unSorted = userData.user.timeline;
  const sortedJobs = userData.user.timeline.sort(
    (a, b) => a.sequence - b.sequence
  );
  console.log(sortedJobs.startDate);

  return (
    <div className="  flex flex-col items-center gap-10 h-full">
      <StringDesign />
      <div className="gap-5 flex flex-col items-center w-full">
        <PageTitle title="Success Story" />
        <PageSubTitle title="Success Story" />
      </div>
      <div className="flex flex-col w-full">
        <>
          {!isLoading && userData && userData.user.education ? (
            <div></div>
          ) : null}
        </>
        <>
          {!isLoading && userData && userData.user.timeline ? (
            <>
              {sortedJobs.map((job) => (
                <div key={job._id} className="w-full">
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
                </div>
              ))}
            </>
          ) : null}
        </>
      </div>
      <ContactCard />
    </div>
  );
};

export default Other;
