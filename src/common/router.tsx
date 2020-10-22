import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import RequireAuth from "./lib/require-auth";
import RequireNotAuth from "./lib/require-not-auth";
import LoginView from "./views/login-view";
import RegistrationView from "./views/register-view";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <RequireNotAuth>
            <LoginView />
          </RequireNotAuth>
        </Route>
        <Route path="/registration" exact>
          <RequireNotAuth>
            <RegistrationView />
          </RequireNotAuth>
        </Route>
        <RequireAuth>
          <Route path="/">Ready to start...</Route>
        </RequireAuth>
      </Switch>
    </BrowserRouter>
  );
}
