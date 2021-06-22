import React, { useState, useCallback, useEffect } from "react";
import {
  getUser,
  validateUserEmail,
  signupUser,
  loginUser,
  logoutUser,
  updateUser,
  resetPassword,
} from "../../api/user/userApi";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCurrentUser = async () => {
    const userData = await getUser();

    if (userData && userData.data) {
      setUser(userData.data.user);
      return userData.data.user;
    }

    if (userData && userData.error) {
      setUser(null);
      return userData;
    }
  };

  const signUserUp = async (userDetails) => {
    const userData = await signupUser(userDetails);

    if (userData && userData.data) {
      setUser(userData.data);
    }

    return userData;
  };

  const logUserIn = async (userDetails) => {
    const userData = await loginUser(userDetails);
    if (userData && userData.data) {
      setUser(userData.data.data);
    }

    return userData;
  };

  const checkIfEmailExists = async (email) => {
    const validation = await validateUserEmail(email);
    return validation;
  };

  const updateUserDetails = async (userDetails) => {
    setLoading(true);
    const userData = await updateUser(userDetails);

    userData && setLoading(false);

    await getCurrentUser();

    return userData;
  };

  const resetUserPassword = async (token, newPassword) => {
    const userData = await resetPassword(token, newPassword);

    if (userData && userData.error) {
      setUser(null);
    } else {
      setUser(userData.data);
    }

    return userData;
  };

  const logUserOut = async () => {
    const logout = await logoutUser();
    setUser(null);

    return logout;
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        setUser,
        getCurrentUser,
        signUserUp,
        logUserIn,
        logUserOut,
        updateUserDetails,
        checkIfEmailExists,
        resetUserPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
