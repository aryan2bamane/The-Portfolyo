import React, { useContext } from "react";

import UserContext from "../context/userContext";

const Footer = () => {
  const { userData, isLoading, error } = useContext(UserContext);
  const updatedAtYear = new Date(userData.user.updatedAt).getFullYear();
  return (
    <>
      <div className="flex items-center justify-center bg-[#e9e9e9] h-20 w-full">
        <p>
          &copy;{updatedAtYear} {""} {userData.user.username} All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
