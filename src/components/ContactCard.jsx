import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ContactCard = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex flex-row-reverse items-center ">
          <div className="h-[2px] w-[50vw] bg-[#e9e9e9]"></div>
          <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] relative left-2"></div>
        </div>
        <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] relative right-1"></div>
      </div>

      <div className="text-center w-full flex flex-col justify-center items-center py-10 gap-10">
        <p className="w-[40vw] leading-[45.6px] text-[38px] font-[600]">
          Ready to bring your ideas to life? I'm here to help
        </p>
        <Link to="/contact-me">
          <Button name="Contact Me" />
        </Link>
      </div>
    </>
  );
};

export default ContactCard;
