import React from "react";
import { Link } from "react-router-dom";

const PageSubTitle = ({ title }) => {
  return (
    <>
      <p className="text-[15px] text-slate-500">
        <Link to="/" className="text-black">
          Homepage
        </Link>{" "}
        / {title}
      </p>
    </>
  );
};

export default PageSubTitle;
