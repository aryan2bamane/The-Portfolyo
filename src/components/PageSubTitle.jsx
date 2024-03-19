import React from "react";
import { Link } from "react-router-dom";

const PageSubTitle = ({ title }) => {
  return (
    <>
      <p className="text-[15px]">
        <Link to="/" className="text-black">
          Homepage
        </Link>
        &nbsp; &nbsp;/ &nbsp;&nbsp;
        <span className="text-slate-500">{title}</span>
      </p>
    </>
  );
};

export default PageSubTitle;
