import React from "react";
import {useProductsQuery} from "../../../main/lib/generated";
import StockHeader from "./stock-header";
import StockTable from "./stock-table";

export default function StockView() {
  const {data, refetch} = useProductsQuery();
  return (
    <>
      <StockHeader refetchProducts={refetch} />
      <StockTable data={data?.products ?? []} refetchProducts={refetch} />
    </>
  );
}
