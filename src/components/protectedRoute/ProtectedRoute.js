import React, { useContext, useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { UserContext } from "../../context/user/UserContext";

const ProtectedRoute = ({ children }) => {
  const { getCurrentUser } = useContext(UserContext);
  const [user, setUser] = useState({});
  const history = useHistory;

  useEffect(() => {
    getCurrentUser().then((data) => setUser(data));
  }, [getCurrentUser]);

  !user && history.replace("/signup");

  return user && <Route>{children}</Route>;
};

export default ProtectedRoute;
