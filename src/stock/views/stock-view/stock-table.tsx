import {ApolloQueryResult} from "@apollo/client";
import {Table} from "antd";
import {ColumnsType} from "antd/es/table";
import React, {createContext, useContext} from "react";
import {Product, ProductsQuery} from "../../../main/lib/generated";
import StockTableActions from "./stock-table-actions";

type Refetch = () => Promise<ApolloQueryResult<ProductsQuery>>;

const TableContext = createContext<{refetch: Refetch} | undefined>(undefined);
function useTableContext() {
  const ctx = useContext(TableContext);
  if (!ctx) {
    throw new Error("You must wrap in TableContext.Provider");
  }
  return ctx;
}

const columns: ColumnsType<Product> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Склад",
    dataIndex: "stockCount",
    key: "stockCount",
  },
  {
    title: "Действия",
    key: "actions",
    render: function TableActions(_, {id, name}) {
      const {refetch} = useTableContext();
      return <StockTableActions refetchProducts={refetch} id={id} name={name} />;
    },
  },
];

interface StockTableProps {
  data: Required<ProductsQuery["products"]>;
  refetchProducts: Refetch;
}

export default function StockTable({data, refetchProducts}: StockTableProps) {
  return (
    <TableContext.Provider value={{refetch: refetchProducts}}>
      <Table columns={columns} dataSource={data} key="id" />
    </TableContext.Provider>
  );
}
