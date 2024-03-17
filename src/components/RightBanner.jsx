import React, { useContext } from "react";
import UserContext from "../context/userContext";

const RightBanner = () => {
  const { userData, isLoading, error } = useContext(UserContext);
  const userPic = userData.user.about.avatar.url;

  return (
    <>
      <div className="mt-24 w-3/12 fixed right-0">
        <img
          src={isLoading ? null : userPic}
          alt=""
          className="h-screen w-full"
        />
      </div>
    </>
  );
};

export default RightBanner;
