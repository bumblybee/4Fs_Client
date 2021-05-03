import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context/user/UserContext";

const ProtectedRoute = ({ children, ...rest }) => {
  const { getCurrentUser } = useContext(UserContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    getCurrentUser().then((data) => setUser(data));
  }, []);

  return user ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Route>
      <Redirect to="/signup" />
    </Route>
  );
};

export default ProtectedRoute;
