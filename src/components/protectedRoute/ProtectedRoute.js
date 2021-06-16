import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context/user/UserContext";

const ProtectedRoute = ({ children, path }) => {
  const { getCurrentUser } = useContext(UserContext);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getCurrentUser().then((data) => {
      if (data && data.id) {
        setUser(data);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, [path]);

  if (loading) return null;

  return user ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Route>
      <Redirect to="/login" />
    </Route>
  );
};

export default ProtectedRoute;
