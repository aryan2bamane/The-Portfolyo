import React, { useContext } from "react";
import UserContext from "../context/userContext";
import SectionHeading from "./SectionHeading";

const LatestBlogs = () => {
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
  const testimonials = userData.user.testimonials;

  return (
    <>
      <SectionHeading heading={"Latest Blogs"} />

      <div className="flex justify-center pb-20">
        {testimonials.map((review) => (
          <div className=" flex flex-col w-full bg-[#e9e9e9] " key={review._id}>
            <img src={review.image.url} alt="" className="h-20 w-20" />
            <p>{review.name}</p>
            <p>{review.position}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestBlogs;
