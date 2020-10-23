import React from "react";
import {useProductsQuery} from "../../../main/lib/generated";
import StockHeader from "./stock-header";
import StockTable from "./stock-table";

export default function StockView() {
  const {data} = useProductsQuery();

  return (
    <>
      <StockHeader />
      <StockTable data={data?.products ?? []} />
    </>
  );
}
