import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#202121] text-red-500 flex flex-col justify-between items-center py-10 h-[89.9vh] w-24 fixed left-0 top-24">
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
