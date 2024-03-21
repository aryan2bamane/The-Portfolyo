import React from "react";

const SectionHeading = ({ heading }) => {
  return (
    <div className="flex items-center w-full pl-5  gap-5">
      <div className="flex w-full items-center">
        <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] relative left-2"></div>
        <div className="w-full h-1 bg-[#e9e9e9]"></div>
      </div>
      <p className="font-[600] text-[24px]">{heading}</p>
      <div className="flex w-full items-center">
        <div className="w-full h-1 bg-[#e9e9e9]"></div>
        <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] "></div>
      </div>
    </div>
  );
};

export default SectionHeading;
