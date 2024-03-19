import React, { useContext } from "react";
import UserContext from "../context/userContext";

const RightBanner = () => {
  const { userData, isLoading, error } = useContext(UserContext);
  const userPic = userData.user.about.avatar.url;

  return (
    <>
      <div className="w-0 lg:w-[30vw] h-[90vh]">
        <img
          src={isLoading ? null : userPic}
          alt=""
          className="h-screen object-cover"
        />
      </div>
    </>
  );
};

export default RightBanner;
