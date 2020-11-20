import {ApolloQueryResult} from "@apollo/client";
import {createContext} from "react";
import useRequiredContext from "../../../../../library/lib/use-required-context";
import {ProductsQuery} from "../../../../../main/lib/generated";

export type RefetchProducts = () => Promise<ApolloQueryResult<ProductsQuery>>;

export const RefetchProductsContext = createContext<{refetch: RefetchProducts} | undefined>(
  undefined,
);

RefetchProductsContext.displayName = "RefetchProductProvider";

export default function useRefetchProducts() {
  return useRequiredContext(RefetchProductsContext);
}
