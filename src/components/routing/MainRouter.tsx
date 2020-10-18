import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import EditCV from "../views/EditCV";
import Dashboard from "../dashboard/Dashboard";
import GitHubLogin from "../views/GitHubLogin";
import useAuthState, { AuthStates } from "../../hooks/useAuthState";

const AuthRouter = () => {
  return (
    <Switch>
      <Route path="/login" component={GitHubLogin} />
      <Redirect to="/login" />
    </Switch>
  );
};

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/cv" component={EditCV} />
      <Route path="/dashboard" component={Dashboard} />
      <Redirect from="/login" to="/" />
      <Redirect from="/" to="/cv" />
    </Switch>
  );
};

const MainRouter = () => {
  const authState = useAuthState((state) => state.authState);

  if (authState !== AuthStates.authenticated) {
    return <AuthRouter />;
  }

  return <AppRouter />;
};

export default MainRouter;
