import {ApolloQueryResult} from "@apollo/client";
import {createContext, useContext} from "react";
import {OrdersQuery} from "../../../main/lib/generated";

export type RefetchOrders = () => Promise<ApolloQueryResult<OrdersQuery>>;

export const RefetchOrdersContext = createContext<{refetch: RefetchOrders} | undefined>(undefined);

export function useRefetchOrdersContext() {
  const ctx = useContext(RefetchOrdersContext);
  if (!ctx) {
    throw new Error("You must wrap in RefetchOrdersContext.Provider");
  }
  return ctx;
}
