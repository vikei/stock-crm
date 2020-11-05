import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import RequireAuth from "../../../auth/lib/require-auth";
import RequireNotAuth from "../../../auth/lib/require-not-auth";
import LoginView from "../../../auth/views/login-view";
import RegistrationView from "../../../auth/views/register-view";
import CreateOrderView from "../../../orders/views/create-order-view";
import OrderView from "../../../orders/views/order-view";
import OrdersView from "../../../orders/views/orders-view";
import UpdateOrderView from "../../../orders/views/update-order-view";
import CreateProductView from "../../../stock/views/create-product-view";
import ProductView from "../../../stock/views/product-view";
import StockView from "../../../stock/views/stock-view";
import UpdateProductView from "../../../stock/views/update-product-view";
import {MessagesProvider} from "../../../library/lib/use-messages";
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
