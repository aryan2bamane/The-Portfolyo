import React, { useContext } from "react";
import StringDesign from "../components/StringDesign";
import PageTitle from "../components/PageTitle";
import ContactCard from "../components/ContactCard";
import PageSubTitle from "../components/PageSubTitle";
import UserContext from "../context/userContext";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Blogs = () => {
  const { userData } = useContext(UserContext);
  // const sortedBlogs = userData.user.blogs.sort(
  //   (a, b) => a.sequence - b.sequence
  // );
  // console.log(sortedBlogs);
  return (
    <div className="  flex flex-col items-center gap-10 h-full">
      <StringDesign />
      <div className="gap-5 flex flex-col items-center w-full">
        <PageTitle title="Exploring the World Through Our Blog" />
        <PageSubTitle title="Blogs" />

        {/* AllBlogs Start */}
        {userData && userData.user.blogs ? (
          <>All Blogs</>
        ) : (
          <>
            <p>Sorry, No Blogs Available</p>
            <p>Way back to Home...</p>
            <Link
              to="/"
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
                className="feather feather-arrow-right rotate-180"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </>
        )}
        {/* AllBlogs End*/}
      </div>
      <ContactCard />
      <Footer />
    </div>
  );
};

export default Blogs;
