import {ApolloQueryResult} from "@apollo/client";
import {Button} from "@blueprintjs/core";
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
        body: <UpdateProduct id={id} />,
      });
    },
    [dispatch],
  );
  const openProductPreview = useCallback(
    ({id, name}: {id: UpdateProductsMutationVariables["id"]; name: string}) => {
      openDrawer(dispatch, {
        title: name,
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
    <>
      <Button icon="edit" onClick={() => openProductForm(id)} />
      <Button icon="eye-open" onClick={() => openProductPreview({id, name})} />
      <Button icon="delete" onClick={() => removeProduct(id)} />
    </>
  );
}
