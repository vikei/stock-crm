import {Table} from "antd";
import {ColumnsType} from "antd/es/table";
import React from "react";
import {Order, OrdersQuery} from "../../../../main/lib/generated";
import OrdersTableActions from "./orders-table-actions";

const columns: ColumnsType<Order> = [
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

interface OrdersTableProps {
  data: Required<OrdersQuery["orders"]>;
}

export default function OrdersTable({data}: OrdersTableProps) {
  return <Table columns={columns} dataSource={data} rowKey="id" />;
}
