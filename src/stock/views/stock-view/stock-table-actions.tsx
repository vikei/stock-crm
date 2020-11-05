import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {Button, Space} from "antd";
import React, {useCallback} from "react";
import {openDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {
  Product,
  ProductQueryVariables,
  UpdateProductMutationVariables,
  useDeleteProductMutation,
} from "../../../main/lib/generated";
import {useMessages} from "../../../main/lib/use-messages";
import ProductDrawer from "../../components/product-drawer";
import UpdateProductDrawer from "../../components/update-product-drawer";
import {useRefetchProducts} from "./stock-view.lib";

interface StockTableActionsProps {
  id: ProductQueryVariables["id"];
  name: Product["name"];
}

export default function StockTableActions({id, name}: StockTableActionsProps) {
  const {dispatch} = useDrawerContext();

  const openPreview = useCallback(
    ({id, name}: {id: ProductQueryVariables["id"]; name: string}) => {
      openDrawer(dispatch, {
        title: name,
        width: "80vw",
        body: <ProductDrawer id={id} />,
      });
    },
    [dispatch],
  );

  const openForm = useCallback(
    ({id, name}: {id: UpdateProductMutationVariables["id"]; name: string}) => {
      openDrawer(dispatch, {
        title: `Обновить #${name}`,
        width: "80vw",
        body: <UpdateProductDrawer id={id} />,
      });
    },
    [dispatch],
  );

  const {refetch} = useRefetchProducts();
  const [deleteMutation] = useDeleteProductMutation();
  const message = useMessages();
  const remove = useCallback(
    async (id: string) => {
      try {
        await deleteMutation({variables: {id}});
        message.success("Продукт успешно удален!");
        await refetch();
      } catch (e) {
        console.error(e);
      }
    },
    [deleteMutation, message, refetch],
  );

  return (
    <Space size={5}>
      <Button icon={<EditOutlined />} onClick={() => openForm({id, name})} />
      <Button icon={<EyeOutlined />} onClick={() => openPreview({id, name})} />
      <Button icon={<DeleteOutlined />} onClick={() => remove(id)} />
    </Space>
  );
}
