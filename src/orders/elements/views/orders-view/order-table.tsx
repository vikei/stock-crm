import {Table} from "antd";
import React from "react";
import {OrdersQuery} from "../../../../main/lib/generated";
import orderColumns from "./lib/order-columns";

interface OrdersTableProps {
  data: Required<OrdersQuery["orders"]>;
}

export default function OrdersTable({data}: OrdersTableProps) {
  return <Table columns={orderColumns} dataSource={data} rowKey="id" />;
}
