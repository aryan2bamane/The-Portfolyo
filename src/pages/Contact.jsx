import React, { useContext } from "react";
import StringDesign from "../components/StringDesign";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import SectionHeading from "../components/SectionHeading";
import UserContext from "../context/userContext";
import Button from "../components/Button";
const Contact = () => {
  const { userData } = useContext(UserContext);
  const phNo = userData.user.about.phoneNumber;
  const mailId = userData.user.email;
  return (
    <>
      <div className="mt-60 lg:mt-52 w-full h-full flex flex-col justify-center items-center gap-10 ">
        <div className="  flex flex-col items-center gap-10 h-full w-full">
          <StringDesign />
          <div className="gap-5 flex flex-col items-center w-full">
            <PageTitle title="Get In Touch!" />
            <PageSubTitle title="Get in Touch!" />
          </div>
        </div>
        <div className=" flex gap-5 justify-center items-center py-10 text-[#f44336]">
          <p>
            Call: <span className="text-black"> {phNo}</span>{" "}
          </p>
          <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336]"></div>
          <p>
            Write: <span className="text-black"> {mailId}</span>{" "}
          </p>
        </div>

        {/* <div className="map w-[50vw] h-[50vh] bg-[#e9e9e9]"></div> */}
        <SectionHeading heading={"Let's Connect"} />

        <div className="flex flex-col w-full px-5 justify-center lg:px-44 gap-10">
          <div className="lg:flex gap-5">
            <div className="w-full lg:w-2/4 pr-5">
              <input
                type="text"
                placeholder="WHAT'S YOUR NAME"
                className="placeholder:font-normal h-5 w-full py-5 px-2"
              />

              <hr />
            </div>
            <div className="w-full lg:w-2/4pl-5">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="placeholder:font-normal h-5 w-full py-5 px-2"
              />

              <hr />
            </div>
          </div>
          <textarea
            className="w-full placeholder:font-normal py-5 px-2"
            type="text-area"
            rows={10}
            placeholder="TELL US ABOUT YOUR PROJECT "
          />
        </div>
        <div className="lg:flex w-full justify-between items-center p-20">
          <p className="text-slate-500 font-normal my-5">
            <span className="text-[#f44336]">*</span>We promise not to disclose
            your personal information to third parties.
          </p>
          <Button name={"Send Message"} />
        </div>
      </div>
    </>
  );
};

export default Contact;
