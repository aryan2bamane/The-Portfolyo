import React, { useContext } from "react";
import UserContext from "../context/userContext";

const RightBanner = () => {
  const { userData, isLoading, error } = useContext(UserContext);
  const userPic = userData.user.about.avatar.url;

  return (
    <>
      <div className="mt-24 w-4/12 bg-blue-300 h-[89.6vh] fixed right-0">
        <img src={isLoading ? null : userPic} alt="" />
      </div>
    </>
  );
};

export default RightBanner;
