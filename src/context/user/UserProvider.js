import React, { useState, useCallback, useEffect } from "react";
import {
  getUser,
  validateUserEmail,
  signupUser,
  loginUser,
  logoutUser,
} from "../../api/user/userApi";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getCurrentUser = useCallback(async () => {
    const userData = await getUser();
    if (userData && !userData.error) {
      console.log(userData);
      setUser(userData.data.user);
      return userData.data.user;
    } else {
      setUser(null);
      return user;
    }
  }, []);

  const signUserUp = async (userDetails) => {
    const userData = await signupUser(userDetails);
    setUser(userData.data);
    return userData;
  };

  const logUserIn = async (userDetails) => {
    const userData = await loginUser(userDetails);

    userData.data && setUser(userData.data.data);
    return userData;
  };

  const validateEmail = async (email) => {
    const validation = await validateUserEmail(email);
    return validation;
  };

  const logUserOut = async () => {
    await logoutUser();
    setUser(null);
  };

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  console.log(user);

  return (
    <UserContext.Provider
      value={{
        user,
        getCurrentUser,
        signUserUp,
        logUserIn,
        validateEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
