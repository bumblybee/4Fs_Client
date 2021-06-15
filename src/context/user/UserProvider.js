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
  const [loading, setLoading] = useState(false);

  const getCurrentUser = async () => {
    setLoading(true);
    const userData = await getUser();

    if (userData && userData.data) {
      setUser(userData.data.user);
      setLoading(false);

      return userData.data.user;
    }

    if (userData && userData.error) {
      setUser(null);
      console.log(userData);
    }

    setLoading(false);
  };

  const signUserUp = async (userDetails) => {
    setLoading(true);
    const userData = await signupUser(userDetails);
    if (userData && userData.data) {
      setUser(userData.data);
    }

    setLoading(false);
    return userData;
  };

  const logUserIn = async (userDetails) => {
    setLoading(true);

    const userData = await loginUser(userDetails);
    if (userData && userData.data) {
      setUser(userData.data.data);
    }

    setLoading(false);
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
    setLoading(true);

    const logout = await logoutUser();
    setUser(null);

    setLoading(false);
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
