import React from "react";
import {AppLayoutContent} from "../../../main/components/app-layout";
import {useProductsQuery} from "../../../main/lib/generated";
import StockHeader from "./stock-header";
import StockTable from "./stock-table";

export default function StockView() {
  const {data, refetch} = useProductsQuery();
  return (
    <AppLayoutContent title="Склад">
      <StockHeader refetchProducts={refetch} />
      <StockTable data={data?.products ?? []} refetchProducts={refetch} />
    </AppLayoutContent>
  );
}
