import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {Button, Space} from "antd";
import React from "react";
import ProductEntity from "../../../domain/entities/product.entity";
import useDeleteProduct from "./lib/use-delete-product";
import useOpenProductDrawer from "./lib/use-open-product-drawer";

interface StockTableActionsProps {
  id: ProductEntity["id"];
  name: ProductEntity["name"];
}

export default function StockTableActions({id, name}: StockTableActionsProps) {
  const openProductDrawer = useOpenProductDrawer();
  const openUpdateProductDrawer = useOpenProductDrawer();
  const deleteProduct = useDeleteProduct();

  return (
    <Space size={5}>
      <Button icon={<EditOutlined />} onClick={() => openUpdateProductDrawer({id, name})} />
      <Button icon={<EyeOutlined />} onClick={() => openProductDrawer({id, name})} />
      <Button icon={<DeleteOutlined />} onClick={() => deleteProduct(id)} />
    </Space>
  );
}
