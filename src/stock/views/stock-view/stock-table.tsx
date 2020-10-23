import {Button, HTMLTable} from "@blueprintjs/core";
import React, {useCallback} from "react";
import {closeDrawer, openDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {
  Product,
  ProductInput,
  ProductsQuery,
  UpdateProductsMutationVariables,
  useProductLazyQuery,
  useUpdateProductsMutation,
} from "../../../main/lib/generated";
import ProductForm from "../../components/product-from";

export default function StockTable({data}: {data: Required<ProductsQuery["products"]>}) {
  const [getProduct, {data: productData}] = useProductLazyQuery({
    onCompleted: data => {
      if (!data.product) {
        return;
      }
      openProductDrawer(data.product);
    },
  });

  const {dispatch: drawerDispatch} = useDrawerContext();
  const [updateProduct] = useUpdateProductsMutation();

  const openProductDrawer = useCallback(
    (product: Product) => {
      async function handleSubmit(values: ProductInput) {
        try {
          await updateProduct({variables: {input: values, id: product.id}});
          closeDrawer(drawerDispatch);
        } catch (e) {
          console.error(e);
        }
      }
      openDrawer(drawerDispatch, {
        title: "Добавить продукт",
        body: <ProductForm onSubmit={handleSubmit} defaultValues={product} />,
      });
    },
    [drawerDispatch, updateProduct],
  );

  const openProductForm = useCallback(
    (id: UpdateProductsMutationVariables["id"]) => {
      if (id === productData?.product?.id) {
        openProductDrawer(productData.product);
        return;
      }
      getProduct({variables: {id}});
    },
    [getProduct, openProductDrawer, productData],
  );

  return (
    <HTMLTable>
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Цена</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <Button icon="edit" onClick={() => openProductForm(product.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </HTMLTable>
  );
}
