import React, { useContext } from "react";
import UserContext from "../context/userContext";

const Reviews = () => {
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
      <div className="flex justify-center ">
        <div className="flex flex-row-reverse items-center pr-10 ">
          <div className="h-[2px] w-80 bg-[#e9e9e9]"></div>
          <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] relative left-2"></div>
        </div>
        <p className="leading-[28.8px] text-[24px] mx-5 font-[600]">Reviews</p>
        <div className="flex  items-center pl-10">
          <div className="h-[2px] w-80 bg-[#e9e9e9]"></div>
          <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] relative right-1"></div>
        </div>
      </div>

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

export default Reviews;
