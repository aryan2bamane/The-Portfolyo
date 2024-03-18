import React from "react";

const Year = (fullDate) => {
  const year = new Date(fullDate).getFullYear();
  return <>{year}</>;
};

export default Year;
