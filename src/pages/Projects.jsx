import React, { useContext } from "react";
import UserContext from "../context/userContext";
import StringDesign from "../components/StringDesign";
import PageTitle from "../components/PageTitle";
import ContactCard from "../components/ContactCard";
import PageSubTitle from "../components/PageSubTitle";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Projects = () => {
  const { userData, isLoading, error } = useContext(UserContext);
  // const projects = userData.user.projects;
  const sortedProjects = userData.user.projects.sort(
    (a, b) => a.sequence - b.sequence
  );
  console.log(sortedProjects);

  return (
    <>
      <div className="  flex flex-col items-center gap-10 h-full">
        <StringDesign />
        <div className="gap-5 flex flex-col items-center w-full">
          <PageTitle title="Designing a Better World Today" />
          <PageSubTitle title="Portfolio" />
          {userData && sortedProjects ? (
            <div className="flex flex-col items-center justify-center  gap-10">
              {sortedProjects.map((project) => (
                <div
                  key={project._id}
                  className="w-full flex flex-col justify-center items-center border-2 border-slate-200"
                >
                  <img
                    src={project.image.url}
                    alt=""
                    className="h-[30vh] w-[50vw] lg:h-[60vh]"
                  />
                  <div className="flex justify-between items-center bg-slate-800 text-white w-full h-max pl-10">
                    <p>{project.title}</p>
                    <Button name="View Project" />
                  </div>
                </div>
              ))}
            </div>
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
        </div>
        <ContactCard />
        <Footer />
      </div>
    </>
  );
};

export default Projects;
