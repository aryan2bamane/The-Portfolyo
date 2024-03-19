import React from "react";

const Sidebar = () => {
  return (
    <div className="w-0 lg:w-24 bg-[#202121] text-red-500 py-32 flex flex-col justify-between items-center h-[90vh] ">
      <div className="tag text-white rotate-[-90deg]">The Tag</div>
      <div className="socials flex flex-col gap-5">
        <img
          className="w-7 h-7"
          src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718346601-xldm.webp"
        />
        <img
          className="w-7 h-7"
          src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718328750-d4jsq.webp"
        />
        <img
          className="w-7 h-7"
          src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718250873-3038n7.webp"
        />
        <img
          className="w-7 h-7"
          src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718263294-2lfj67.webp"
        />
      </div>
    </div>
  );
};

export default Sidebar;
