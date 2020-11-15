import React from "react";
import {AppContent} from "../../../../main/components/app-layout";
import {useOrdersQuery} from "../../../../main/lib/generated";
import OrdersTable from "./order-table";
import OrdersHeader from "./orders-header";
import {RefetchOrdersContext} from "./lib";

export default function OrdersView() {
  const {data, refetch} = useOrdersQuery();

  return (
    <AppContent title="Заказы">
      <RefetchOrdersContext.Provider value={{refetch}}>
        <OrdersHeader />
        <OrdersTable data={data?.orders ?? []} />
      </RefetchOrdersContext.Provider>
    </AppContent>
  );
}
