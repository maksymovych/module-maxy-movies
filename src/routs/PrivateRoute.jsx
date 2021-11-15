import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ path, component: Component }) {
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <Route
      path={path}
      exact
      render={() => {
        if (isLoggedIn || localStorage.getItem("user")) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
}

export default PrivateRoute;
