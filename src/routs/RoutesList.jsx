import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { routes } from "./routes";
import PrivateRoute from "./PrivateRoute";

function RoutesList() {
  return (
    <Switch>
      {routes.map(({ path, component, isPrivate }, i) =>
        isPrivate ? (
          <PrivateRoute key={i} path={path} component={component} />
        ) : (
          <Route key={i} path={path} component={component} exact />
        )
      )}
      <Redirect to="/" />
    </Switch>
  );
}

export default RoutesList;
