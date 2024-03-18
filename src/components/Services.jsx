import React, { useContext } from "react";
import UserContext from "../context/userContext";
import SectionHeading from "./SectionHeading";

const Services = () => {
  const {
    userData,
    isLoading,
    error,
    // userName,
    // userTitle,
    // userSubTitle,
    // userPic,
    // userAddress,
    // userDesc,
    // userService,
  } = useContext(UserContext);
  const userService = userData.user.services;
  return (
    <>
      <SectionHeading heading="Services" />

      <div className="grid grid-cols-3 w-full py-10 gap-5">
        {userData && userService ? (
          <>
            {userService.map((service) => (
              <div className="w-full bg-[#e9e9e9] h-[10vh]" key={service._id}>
                {service.name}
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
};

export default Services;
