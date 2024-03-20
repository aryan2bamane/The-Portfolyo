import React from "react";
import Data from "../data/sections/pricing.json";
// import Button from "./Button";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";

const Pricing = () => {
  return (
    <>
      <SectionHeading heading="Pricing" />
      {/* prices */}
      <section className="w-full">
        <div className="lg:flex  justify-center gap-20 text-center ">
          {Data.items.map((item, key) => (
            <div
              key={`pricing-item-${key}`}
              className="border-2 border-slate-200 p-20"
            >
              <div className="flex flex-col gap-10 justify-center ">
                <h4 className="text-[#f44336] font-[600]">{item.name}</h4>

                <div className="text-[46px]">
                  {item.price.value}{" "}
                  <span className="text-[20px]">{item.price.after}</span>
                </div>

                <div className="flex justify-center  ">
                  <div className="flex flex-row-reverse items-center w-full">
                    <div className="h-[2px] w-full bg-[#e9e9e9]"></div>
                    <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] relative left-2"></div>
                  </div>
                  <div className="w-2 h-2 mr-2 rounded-full bg-[#f44336] relative right-1"></div>
                </div>

                <div />

                <ul className="text-slate-500">
                  {item.list.map((element, key2) => (
                    <div key={`pricing-item-${key}-list-${key2}`}>
                      {element.active == 1 && (
                        <li className="">{element.value}</li>
                      )}
                      {element.active != 1 && (
                        <li className="">{element.value}</li>
                      )}
                    </div>
                  ))}
                </ul>

                <Link
                  to={item.button.link + "-me"}
                  className="flex justify-center items-center gap-5 text-slate-700"
                >
                  <span>{item.button.label}</span>
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
                    className="feather feather-arrow-right bg-[#f44336] w-10 h-10 rounded-full p-2 text-white"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* prices end */}
    </>
  );
};

export default Pricing;
