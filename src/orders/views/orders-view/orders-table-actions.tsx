import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {Button, Space} from "antd";
import React, {useCallback} from "react";
import {openDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {
  OrderQueryVariables,
  UpdateOrderMutationVariables,
  useDeleteOrderMutation,
} from "../../../main/lib/generated";
import OrderPreview from "../../components/order-preview";
import UpdateOrderDrawer from "../../components/update-order-drawer";
import {useRefetchOrdersContext} from "./orders-view.lib";

interface OrdersTableActionsProps {
  id: OrderQueryVariables["id"];
}

export default function OrdersTableActions({id}: OrdersTableActionsProps) {
  const {dispatch} = useDrawerContext();
  const {refetch} = useRefetchOrdersContext();

  const openForm = useCallback(
    (id: UpdateOrderMutationVariables["id"]) => {
      openDrawer(dispatch, {
        title: `Обновить закза #${id}`,
        width: "50vw",
        body: <UpdateOrderDrawer id={id} />,
      });
    },
    [dispatch],
  );

  const openPreview = useCallback(
    ({id}: {id: string}) => {
      openDrawer(dispatch, {
        title: `#${id}`,
        width: "50vw",
        body: <OrderPreview id={id} />,
      });
    },
    [dispatch],
  );
  const [deleteOrder] = useDeleteOrderMutation();
  const remove = useCallback(
    async (id: string) => {
      try {
        await deleteOrder({variables: {id}});
        await refetch();
      } catch (e) {
        console.error(e);
      }
    },
    [deleteOrder, refetch],
  );

  return (
    <Space size={5}>
      <Button icon={<EditOutlined />} onClick={() => openForm(id)} />
      <Button icon={<EyeOutlined />} onClick={() => openPreview({id})} />
      <Button icon={<DeleteOutlined />} onClick={() => remove(id)} />
    </Space>
  );
}
