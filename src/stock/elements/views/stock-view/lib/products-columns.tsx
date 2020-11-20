import {ColumnsType} from "antd/es/table";
import React from "react";
import ProductEntity from "../../../../domain/entities/product.entity";
import StockTableActions from "../stock-table-actions";

const productColumns: ColumnsType<ProductEntity> = [
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

export default productColumns;
