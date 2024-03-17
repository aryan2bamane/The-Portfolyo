import React, { useEffect, useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Vars--------------------------------------

  const [userName, setUserName] = useState(null);
  const [userTitle, setUserTitle] = useState(null);
  const [userSubTitle, setUserSubTitle] = useState(null);
  const [userPic, setUserPic] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [userDesc, setUserDesc] = useState(null);
  const [userService, setUserService] = useState(null);

  // Vars--------------------------------------

  const userId = "65b3a22c01d900e96c4219ae"; // User ID provided in the endpoint

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.user);
     

          setUserData(data);
          setIsLoading(true);
          setIsLoading(false);
          // -----------------------
          // setUserName(userData.user.about.name);
          // setUserTitle(userData.user.about.title);
          // setUserSubTitle(userData.user.about.subTitle);
          // setUserPic(userData.user.about.avatar.url);
          // setUserAddress(userData.user.about.address);
          // setUserDesc(userData.user.about.description);
          // setUserService(userData.user.services);
          // -----------------------
          setIsLoading(false);
          console.log(userData.user.services);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData(); // Data is available, no longer loading
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <UserContext.Provider
      value={{
        userData,
        isLoading,
        error,
        userName,
        userTitle,
        userSubTitle,
        userPic,
        userAddress,
        userDesc,
        userService,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
