import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {ApolloQueryResult} from "@apollo/client";
import {Button, Space} from "antd";
import React, {useCallback} from "react";
import {openDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {
  Product,
  ProductsQuery,
  UpdateProductsMutationVariables,
  useDeleteProductMutation,
} from "../../../main/lib/generated";
import ProductPreview from "../../components/product-preview";
import UpdateProduct from "../../components/update-product";

interface StockTableActionsProps {
  refetchProducts: () => Promise<ApolloQueryResult<ProductsQuery>>;
  id: UpdateProductsMutationVariables["id"];
  name: Product["name"];
}

export default function StockTableActions({id, name, refetchProducts}: StockTableActionsProps) {
  const {dispatch} = useDrawerContext();
  const openProductForm = useCallback(
    (id: UpdateProductsMutationVariables["id"]) => {
      openDrawer(dispatch, {
        title: "Обновить продукт",
        width: "50vw",
        body: <UpdateProduct id={id} />,
      });
    },
    [dispatch],
  );
  const openProductPreview = useCallback(
    ({id, name}: {id: UpdateProductsMutationVariables["id"]; name: string}) => {
      openDrawer(dispatch, {
        title: name,
        width: "50vw",
        body: <ProductPreview id={id} />,
      });
    },
    [dispatch],
  );

  const [deleteProduct] = useDeleteProductMutation();
  const removeProduct = useCallback(
    async (id: string) => {
      try {
        await deleteProduct({variables: {id}});
        await refetchProducts();
      } catch (e) {
        console.error(e);
      }
    },
    [deleteProduct, refetchProducts],
  );

  return (
    <Space size={5}>
      <Button icon={<EditOutlined />} onClick={() => openProductForm(id)} />
      <Button icon={<EyeOutlined />} onClick={() => openProductPreview({id, name})} />
      <Button icon={<DeleteOutlined />} onClick={() => removeProduct(id)} />
    </Space>
  );
}
