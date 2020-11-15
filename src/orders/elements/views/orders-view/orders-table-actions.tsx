import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {Button, Space} from "antd";
import React, {useCallback} from "react";
import useDrawer, {openDrawer} from "../../../../library/lib/use-drawer";
import {
  OrderQueryVariables,
  UpdateOrderMutationVariables,
  useDeleteOrderMutation,
} from "../../../../main/lib/generated";
import useMessages from "../../../../library/lib/use-messages";
import OrderDrawer from "../../components/order-drawer";
import UpdateOrderDrawer from "../../components/update-order-drawer";
import {useRefetchOrders} from "./lib";

interface OrdersTableActionsProps {
  id: OrderQueryVariables["id"];
}

export default function OrdersTableActions({id}: OrdersTableActionsProps) {
  const {dispatch} = useDrawer();

  const openForm = useCallback(
    (id: UpdateOrderMutationVariables["id"]) => {
      openDrawer(dispatch, {
        title: `Обновить закза #${id}`,
        width: "80vw",
        body: <UpdateOrderDrawer id={id} />,
      });
    },
    [dispatch],
  );

  const openPreview = useCallback(
    ({id}: {id: string}) => {
      openDrawer(dispatch, {
        title: `#${id}`,
        width: "80vw",
        body: <OrderDrawer id={id} />,
      });
    },
    [dispatch],
  );

  const {refetch} = useRefetchOrders();
  const message = useMessages();
  const [deleteMutation] = useDeleteOrderMutation();
  const remove = useCallback(
    async (id: string) => {
      try {
        await deleteMutation({variables: {id}});
        message.success("Заказ успешно удален!");
        await refetch();
      } catch (e) {
        console.error(e);
      }
    },
    [deleteMutation, message, refetch],
  );

  return (
    <Space size={5}>
      <Button icon={<EditOutlined />} onClick={() => openForm(id)} />
      <Button icon={<EyeOutlined />} onClick={() => openPreview({id})} />
      <Button icon={<DeleteOutlined />} onClick={() => remove(id)} />
    </Space>
  );
}
