import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import RequireAuth from "../../../auth/components/require-auth";
import RequireNotAuth from "../../../auth/components/require-not-auth";
import LoginView from "../../../auth/views/login-view";
import RegistrationView from "../../../auth/views/register-view";
import {MessagesProvider} from "../../../library/lib/use-messages";
import CreateOrderView from "../../../orders/elements/views/create-order-view";
import OrderView from "../../../orders/elements/views/order-view";
import OrdersView from "../../../orders/elements/views/orders-view";
import UpdateOrderView from "../../../orders/elements/views/update-order-view";
import CreateProductView from "../../../stock/elements/views/create-product-view";
import ProductView from "../../../stock/elements/views/product-view";
import StockView from "../../../stock/elements/views/stock-view";
import UpdateProductView from "../../../stock/elements/views/update-product-view";
import AppLayout from "../app-layout/app-layout";

export default function Router() {
  return (
    <BrowserRouter>
      <MessagesProvider>
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
                <Route path="/stock" exact>
                  <StockView />
                </Route>
                <Route path="/stock/product/:id" exact>
                  <ProductView />
                </Route>
                <Route path="/stock/product/:id/update" exact>
                  <UpdateProductView />
                </Route>
                <Route path="/stock/product/create">
                  <CreateProductView />
                </Route>
                <Route path="/orders" exact>
                  <OrdersView />
                </Route>
                <Route path="/orders/create">
                  <CreateOrderView />
                </Route>
                <Route path="/orders/:id" exact>
                  <OrderView />
                </Route>
                <Route path="/orders/:id/update" exact>
                  <UpdateOrderView />
                </Route>
              </AppLayout>
            </RequireAuth>
          </Route>
        </Switch>
      </MessagesProvider>
    </BrowserRouter>
  );
}
