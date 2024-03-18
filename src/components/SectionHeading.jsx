import React from "react";

const SectionHeading = ({ heading }) => {
  return (
    <div className="flex justify-center py-10">
      <div className="flex flex-row-reverse items-center pr-10 ">
        <div className="h-[2px] w-80 bg-[#e9e9e9]"></div>
        <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] relative left-2"></div>
      </div>
      <p className="leading-[28.8px] text-[24px] mx-5 font-[600]">{heading}</p>
      <div className="flex  items-center pl-10">
        <div className="h-[2px] w-80 bg-[#e9e9e9]"></div>
        <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] relative right-1"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
