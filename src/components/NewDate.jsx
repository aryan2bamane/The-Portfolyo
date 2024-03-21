import React from "react";

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const NewDate = ({ endDate }) => {
  const dateObj = new Date(endDate);

  // Extract the year from the date
  const year = dateObj.getFullYear();

  return <p>{year}</p>;
};

export default NewDate;
