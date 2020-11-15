import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {Button, Space} from "antd";
import React, {useCallback} from "react";
import useDrawer, {openDrawer} from "../../../../library/lib/use-drawer";
import useMessages from "../../../../library/lib/use-messages";
import {useDeleteProductMutation} from "../../../../main/lib/generated";
import ProductEntity from "../../../domain/entities/product.entity";
import ProductDrawer from "../../components/product-drawer";
import UpdateProductDrawer from "../../components/update-product-drawer";
import {useRefetchProducts} from "./lib";

interface StockTableActionsProps {
  id: ProductEntity["id"];
  name: ProductEntity["name"];
}

export default function StockTableActions({id, name}: StockTableActionsProps) {
  const {dispatch} = useDrawer();

  /**
   * TODO: move to separate file
   * To have only one reason to change UpdateProductDrawer
   */
  const openPreview = useCallback(
    ({id, name}: {id: ProductEntity["id"]; name: ProductEntity["name"]}) => {
      openDrawer(dispatch, {
        title: name,
        width: "80vw",
        body: <ProductDrawer id={id} />,
      });
    },
    [dispatch],
  );

  /**
   * TODO: move to separate file
   * To have only one reason to change UpdateProductDrawer
   */
  const openForm = useCallback(
    ({id, name}: {id: ProductEntity["id"]; name: ProductEntity["name"]}) => {
      openDrawer(dispatch, {
        title: `Обновить #${name}`,
        width: "80vw",
        body: <UpdateProductDrawer id={id} />,
      });
    },
    [dispatch],
  );

  /**
   * TODO: move to separate file
   * To have only one reason to change UpdateProductDrawer
   */
  const {refetch} = useRefetchProducts();
  const [deleteMutation] = useDeleteProductMutation();
  const message = useMessages();
  const remove = useCallback(
    async (id: ProductEntity["id"]) => {
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
