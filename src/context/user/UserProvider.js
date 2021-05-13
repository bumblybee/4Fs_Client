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
    if (userData && !userData.error) {
      setUser(userData.data.user);
      return userData.data.user;
    } else {
      setUser(null);
      return user;
    }
  }, []);

  const signUserUp = async (userDetails) => {
    const userData = await signupUser(userDetails);
    userData && userData.data && setUser(userData.data);
    return userData;
  };

  const logUserIn = async (userDetails) => {
    const userData = await loginUser(userDetails);

    userData.data && setUser(userData.data.data);
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
        updateUserDetails,
        checkIfEmailExists,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
