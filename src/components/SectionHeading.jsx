import React from "react";

const SectionHeading = ({ heading }) => {
  return (
    <div className="flex justify-center py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="flex items-center w-1/3 md:w-auto">
        <div className="h-[2px] flex-1 bg-[#e9e9e9]"></div>
        <div className="w-2 h-2 ml-2 rounded-full bg-[#f44336]"></div>
      </div>
      <p className="flex-shrink-0 text-lg font-semibold mx-5">{heading}</p>
      <div className="flex items-center w-1/3 md:w-auto">
        <div className="h-[2px] flex-1 bg-[#e9e9e9]"></div>
        <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336]"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
