import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {Button, Space} from "antd";
import React from "react";
import OrderEntity from "../../../domain/entities/orderEntity";
import useDeleteOrder from "./lib/use-delete-order";
import useOpenOrderDrawer from "./lib/use-open-order-drawer";
import useOpenUpdateOrderDrawer from "./lib/use-open-update-order-drawer";

interface OrdersTableActionsProps {
  id: OrderEntity["id"];
}

export default function OrdersTableActions({id}: OrdersTableActionsProps) {
  const openUpdateOrderDrawer = useOpenUpdateOrderDrawer();
  const openOrderDrawer = useOpenOrderDrawer();
  const deleteOrder = useDeleteOrder();

  return (
    <Space size={5}>
      <Button icon={<EditOutlined />} onClick={() => openUpdateOrderDrawer(id)} />
      <Button icon={<EyeOutlined />} onClick={() => openOrderDrawer({id})} />
      <Button icon={<DeleteOutlined />} onClick={() => deleteOrder(id)} />
    </Space>
  );
}
