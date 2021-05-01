import React, { useState, useCallback, useEffect } from "react";
// import { getUser, signupUser, loginUser, logoutUser } from "../../api/userApi";
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

  //   const signUserUp = async (userDetails) => {
  //     const user = await signupUser(userDetails);
  //     setUser(user.data);
  //     return user;
  //   };

  //   const logUserIn = async (userDetails) => {
  //     const user = await loginUser(userDetails);
  //     setUser(user.data);
  //     return user;
  //   };

  //   const logUserOut = async () => {
  //     await logoutUser();
  //     setUser(null);
  //   };

  //   useEffect(() => {
  //     getCurrentUser();
  //   }, [getCurrentUser]);

  //   console.log(user);

  //   return (
  //     <UserContext.Provider
  //       value={{
  //         user,
  //         setUser,
  //         getCurrentUser,
  //         signUserUp,
  //         logUserIn,
  //         logUserOut,
  //       }}
  //     >
  //       {children}
  //     </UserContext.Provider>
  //   );
};

export default UserProvider;
