import React, { useContext } from "react";
import UserContext from "../context/userContext";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { userData } = useContext(UserContext);
  const social_handles = userData.user.social_handles;
  console.log(social_handles);
  return (
    <div className="w-0 lg:w-24 bg-[#202121] text-red-500 py-32 flex flex-col justify-between items-center h-[90vh] ">
      <div className="tag text-white rotate-[-90deg]">The Tag</div>
      <div className="socials flex flex-col gap-5">
        {userData
          ? social_handles.map((handle) => (
              <NavLink key={handle._id} to={handle.url}>
                <img
                  className="w-7 h-7"
                  src={handle.image.url}
                  alt={handle.platform}
                />
              </NavLink>
            ))
          : null}
      </div>
    </div>
  );
};

export default Sidebar;
