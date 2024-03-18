import React from "react";
import StringDesign from "../components/StringDesign";
import PageTitle from "../components/PageTitle";
import ContactCard from "../components/ContactCard";
import PageSubTitle from "../components/PageSubTitle";

const Blogs = () => {
  return (
    <div className="  flex flex-col items-center gap-10 h-full">
      <StringDesign />
      <div className="gap-5 flex flex-col items-center w-full">
        <PageTitle title="Exploring the World Through Our Blog" />
        <PageSubTitle title="Blogs" />
      </div>
      <ContactCard />
    </div>
  );
};

export default Blogs;
