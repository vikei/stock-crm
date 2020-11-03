import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {ApolloQueryResult} from "@apollo/client";
import {Button, Space} from "antd";
import React, {useCallback} from "react";
import {openDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {
  Product,
  ProductQueryVariables,
  ProductsQuery,
  UpdateProductsMutationVariables,
  useDeleteProductMutation,
} from "../../../main/lib/generated";
import {useMessages} from "../../../main/lib/use-messages";
import ProductDrawer from "../../components/product-drawer";
import UpdateProductDrawer from "../../components/update-product-drawer";

interface StockTableActionsProps {
  refetchProducts: () => Promise<ApolloQueryResult<ProductsQuery>>;
  id: ProductQueryVariables["id"];
  name: Product["name"];
}

export default function StockTableActions({id, name, refetchProducts}: StockTableActionsProps) {
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
    ({id, name}: {id: UpdateProductsMutationVariables["id"]; name: string}) => {
      openDrawer(dispatch, {
        title: `Обновить #${name}`,
        width: "80vw",
        body: <UpdateProductDrawer id={id} />,
      });
    },
    [dispatch],
  );

  const [deleteProduct] = useDeleteProductMutation();
  const message = useMessages();
  const remove = useCallback(
    async (id: string) => {
      try {
        await deleteProduct({variables: {id}});
        message.success("Продукт успешно удален!");
        await refetchProducts();
      } catch (e) {
        console.error(e);
      }
    },
    [deleteProduct, message, refetchProducts],
  );

  return (
    <Space size={5}>
      <Button icon={<EditOutlined />} onClick={() => openForm({id, name})} />
      <Button icon={<EyeOutlined />} onClick={() => openPreview({id, name})} />
      <Button icon={<DeleteOutlined />} onClick={() => remove(id)} />
    </Space>
  );
}
