import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context/user/UserContext";

const ProtectedRoute = ({ children, path }) => {
  const { getCurrentUser } = useContext(UserContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    getCurrentUser().then((data) => {
      if (data && data.id) {
        setUser(data);
      } else {
        setUser(null);
      }
    });
  }, [path]);

  return user ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Route>
      <Redirect to="/signup" />
    </Route>
  );
};

export default ProtectedRoute;
