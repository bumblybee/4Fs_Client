import React, { useState, useCallback, useEffect } from "react";
import { getUser, signupUser, loginUser, logoutUser } from "../api/userApi";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   const getCurrentUser = useCallback(async () => {
  //     const userData = await getUser();
  //     if (userData && !userData.error) {
  //       setUser(userData.data.user);
  //       return userData.data.user;
  //     } else {
  //       setUser(null);
  //       return user;
  //     }
  //   }, []);

  const signUserUp = async (userDetails) => {
    const userData = await signupUser(userDetails);
    setUser(userData.data);
    return userData;
  };

  const logUserIn = async (userDetails) => {
    const userData = await loginUser(userDetails);

    setUser(userData.data.data);
    return userData;
  };
  console.log(user);
  const logUserOut = async () => {
    await logoutUser();
    setUser(null);
  };

  //   useEffect(() => {
  //     getCurrentUser();
  //   }, [getCurrentUser]);

  //   console.log(user);

  return (
    <UserContext.Provider
      value={{
        user,
        signUserUp,
        logUserIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
