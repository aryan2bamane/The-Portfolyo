import React, { useContext } from "react";

const PageTitle = ({ title }) => {
  return (
    <>
      <div className=" lg:font-[Outfit] text-[60px] leading-[60px] font-semibold text-center w-2/4">
        <p>{title}</p>
      </div>
    </>
  );
};

export default PageTitle;
