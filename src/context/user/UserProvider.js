import React, { useState, useCallback, useEffect } from "react";
import {
  getUser,
  validateUserEmail,
  signupUser,
  loginUser,
  logoutUser,
  updateUser,
} from "../../api/user/userApi";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getCurrentUser = useCallback(async () => {
    const userData = await getUser();

    if (userData && userData.data && !userData.error) {
      setUser(userData.data.user);
      console.log(userData.data.user);
      return userData.data.user;
    }
  }, []);

  const signUserUp = async (userDetails) => {
    const userData = await signupUser(userDetails);
    userData && userData.data && setUser(userData.data);
    return userData;
  };

  const logUserIn = async (userDetails) => {
    const userData = await loginUser(userDetails);

    userData && userData.data && setUser(userData.data.data);
    return userData;
  };

  const checkIfEmailExists = async (email) => {
    const validation = await validateUserEmail(email);
    return validation;
  };

  const updateUserDetails = async (userDetails) => {
    const userData = await updateUser(userDetails);
    await getCurrentUser();
    return userData;
  };

  const logUserOut = async () => {
    const logout = await logoutUser();
    setUser(null);
    return logout;
  };

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <UserContext.Provider
      value={{
        user,
        getCurrentUser,
        signUserUp,
        logUserIn,
        logUserOut,
        updateUserDetails,
        checkIfEmailExists,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
