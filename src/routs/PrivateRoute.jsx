import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ path, component: Component }) {
  const isLoggedIn = localStorage.getItem("session_id");
  return (
    <Route
      path={path}
      exact
      render={() => {
        if (isLoggedIn) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
}

export default PrivateRoute;
