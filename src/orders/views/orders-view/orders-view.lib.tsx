import {ApolloQueryResult} from "@apollo/client";
import {createContext} from "react";
import useRequiredContext from "../../../library/lib/use-required-context";
import {OrdersQuery} from "../../../main/lib/generated";

export type RefetchOrders = () => Promise<ApolloQueryResult<OrdersQuery>>;

export const RefetchOrdersContext = createContext<{refetch: RefetchOrders} | undefined>(undefined);

export function useRefetchOrders() {
  return useRequiredContext(RefetchOrdersContext);
}
