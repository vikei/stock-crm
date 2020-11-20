import {ColumnsType} from "antd/es/table";
import React from "react";
import {Order} from "../../../../../main/lib/generated";
import OrdersTableActions from "../orders-table-actions";

const orderColumns: ColumnsType<Order> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Статус",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Действия",
    key: "actions",
    render: function TableActions(_, {id}) {
      return <OrdersTableActions id={id} />;
    },
  },
];

export default orderColumns;
