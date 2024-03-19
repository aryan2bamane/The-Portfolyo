import React from "react";

const Skillset = () => {
  return (
    <div className="skillset bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Design Tools</h2>
      <div className="skill mb-4">
        <p>Figma</p>
        <div className="progress-bar bg-white h-2 w-full">
          <div
            className="progress bg-red-500 h-full"
            style={{ width: "95%", backgroundColor: "#f44336" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
