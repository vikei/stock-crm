import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {Button, Space} from "antd";
import React, {useCallback} from "react";
import {openDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {
  OrderQueryVariables,
  UpdateOrderMutationVariables,
  useDeleteOrderMutation,
} from "../../../main/lib/generated";
import {useMessages} from "../../../main/lib/use-messages";
import OrderDrawer from "../../components/order-drawer";
import UpdateOrderDrawer from "../../components/update-order-drawer";
import {useRefetchOrdersContext} from "./orders-view.lib";

interface OrdersTableActionsProps {
  id: OrderQueryVariables["id"];
}

export default function OrdersTableActions({id}: OrdersTableActionsProps) {
  const {dispatch} = useDrawerContext();

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

  const {refetch} = useRefetchOrdersContext();
  const message = useMessages();
  const [deleteOrder] = useDeleteOrderMutation();
  const remove = useCallback(
    async (id: string) => {
      try {
        await deleteOrder({variables: {id}});
        message.success("Заказ успешно удален!");
        await refetch();
      } catch (e) {
        console.error(e);
      }
    },
    [deleteOrder, message, refetch],
  );

  return (
    <Space size={5}>
      <Button icon={<EditOutlined />} onClick={() => openForm(id)} />
      <Button icon={<EyeOutlined />} onClick={() => openPreview({id})} />
      <Button icon={<DeleteOutlined />} onClick={() => remove(id)} />
    </Space>
  );
}
