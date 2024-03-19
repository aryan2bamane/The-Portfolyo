import React from "react";
import AllServices from "../components/AllServices";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import StringDesign from "../components/StringDesign";
import Reviews from "../components/Reviews";
import ContactCard from "../components/ContactCard";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-10 h-full px-24 ">
        <StringDesign />
        <PageTitle title="This is what I do best" />
        <PageSubTitle title="This is what I do best" />
        <AllServices />
        <div className="px-24 flex flex-col items-center gap-10">
          <Pricing />
        </div>
        <Reviews />
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default Services;
