import {Table} from "antd";
import {ColumnsType} from "antd/es/table";
import React from "react";
import {Product, ProductsQuery} from "../../../main/lib/generated";
import StockTableActions from "./stock-table-actions";

/**
 * TODO: move to separate file
 * To have only one reason to change UpdateProductDrawer
 */
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
      return <StockTableActions id={id} name={name} />;
    },
  },
];

interface StockTableProps {
  data: Required<ProductsQuery["products"]>;
}

export default function StockTable({data}: StockTableProps) {
  return <Table columns={columns} dataSource={data} rowKey="id" />;
}
