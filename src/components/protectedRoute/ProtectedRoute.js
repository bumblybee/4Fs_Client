import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect, useHstory } from "react-router-dom";
import { UserContext } from "../../context/user/UserContext";

const ProtectedRoute = ({ children }) => {
  const { getCurrentUser } = useContext(UserContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    getCurrentUser().then((data) => setUser(data));
  }, [getCurrentUser]);

  return user ? (
    <Route>{children}</Route>
  ) : (
    <Route>
      <Redirect to="/signup" />
    </Route>
  );
};

export default ProtectedRoute;
