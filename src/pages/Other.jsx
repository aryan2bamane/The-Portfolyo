import React, { useContext } from "react";
import UserContext from "../context/userContext";
import StringDesign from "../components/StringDesign";
import ContactCard from "../components/ContactCard";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import Year from "../components/Year";
import Work from "../components/Work";

const Other = () => {
  const { userData, isLoading, error } = useContext(UserContext);
  // const sortedEdu = hardSkills.sort((a, b) => a.sequence - b.sequence);

  const sortedJobs = userData.user.timeline.sort(
    (a, b) => a.sequence - b.sequence
  );
  console.log(sortedJobs);

  return (
    <div className="  flex flex-col items-center gap-10 h-full">
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
          <Work />
        </>
      </div>
      <ContactCard />
    </div>
  );
};

export default Other;
