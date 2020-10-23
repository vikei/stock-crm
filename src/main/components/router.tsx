import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import RequireAuth from "../../auth/lib/require-auth";
import RequireNotAuth from "../../auth/lib/require-not-auth";
import LoginView from "../../auth/views/login-view";
import RegistrationView from "../../auth/views/register-view";
import StockView from "../../stock/views/stock-view/stock-view";
import AppLayout from "./app-layout";

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
        <Route path="/">
          <RequireAuth>
            <AppLayout>
              <Route path="/stock">
                <StockView />
              </Route>
            </AppLayout>
          </RequireAuth>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
