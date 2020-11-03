import {ApolloQueryResult} from "@apollo/client";
import {createContext, useContext} from "react";
import {ProductsQuery} from "../../../main/lib/generated";

export type RefetchProducts = () => Promise<ApolloQueryResult<ProductsQuery>>;

export const RefetchProductsContext = createContext<{refetch: RefetchProducts} | undefined>(
  undefined,
);

export function useRefetchProducts() {
  const ctx = useContext(RefetchProductsContext);
  if (!ctx) {
    throw new Error("You must wrap in RefetchProductsContext.Provider");
  }
  return ctx;
}
