import React, { useEffect, useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = "65b3a22c01d900e96c4219ae"; // User ID provided in the endpoint

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          setUserData(data);
          setIsLoading(false);

          console.log(data.user);
          console.log(userData.about.address);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData(); // Data is available, no longer loading
  }, [userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <UserContext.Provider value={{ userData, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
