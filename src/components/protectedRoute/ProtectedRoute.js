import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context/user/UserContext";

const ProtectedRoute = ({ children, ...rest }) => {
  const { user } = useContext(UserContext);

  return user ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Route>
      <Redirect to="/signup" />
    </Route>
  );
};

export default ProtectedRoute;
