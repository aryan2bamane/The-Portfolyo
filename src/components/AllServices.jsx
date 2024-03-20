import React, { useContext } from "react";
import UserContext from "../context/userContext";
import { Link } from "react-router-dom";

const AllServices = () => {
  const { userData } = useContext(UserContext);
  const userService = userData.user.services;
  return (
    <>
      <div className="md:grid md:grid-cols-3 w-full gap-5 lg:py-10  justify-center items-center">
        {userData && userService ? (
          <>
            {userService.map((service) => (
              <div
                className="w-full bg-[#e9e9e9] lg:h-full flex flex-col justify-center items-center gap-2 p-10 border-2 border-slate-300"
                key={service._id}
              >
                <img src={service.image.url} alt="" className="w-20 h-20" />
                <p>{service.name}</p>
                <p className="text-slate-500 text-center">{service.desc}</p>
                <Link
                  to="service-1"
                  className="mil-link mil-icon-link bg-[#f44336] w-10 h-10 rounded-full p-2 text-white "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
};

export default AllServices;
