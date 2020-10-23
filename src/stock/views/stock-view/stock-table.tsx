import {ApolloQueryResult} from "@apollo/client";
import {Button, HTMLTable} from "@blueprintjs/core";
import React, {useCallback} from "react";
import {openDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {
  ProductsQuery,
  UpdateProductsMutationVariables,
  useDeleteProductMutation,
} from "../../../main/lib/generated";
import ProductPreview from "../../components/product-preview";
import UpdateProduct from "../../components/update-product";

interface StockTableProps {
  data: Required<ProductsQuery["products"]>;
  refetchProducts: () => Promise<ApolloQueryResult<ProductsQuery>>;
}

export default function StockTable({data, refetchProducts}: StockTableProps) {
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
    <HTMLTable width="100%" interactive bordered>
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Цена</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data?.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <Button icon="edit" onClick={() => openProductForm(product.id)} />
              <Button
                icon="eye-open"
                onClick={() => openProductPreview({id: product.id, name: product.name})}
              />
              <Button icon="delete" onClick={() => removeProduct(product.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </HTMLTable>
  );
}
