import React, {useCallback} from "react";
import useDrawer, {closeDrawer} from "../../../library/lib/use-drawer";
import useFakeLocation from "../../../library/lib/use-fake-location";
import {ProductInput, ProductQueryVariables, useProductQuery} from "../../../main/lib/generated";
import useProductMessage from "../../lib/use-product-message";
import useUpdateProduct from "../../lib/use-update-product";
import ProductForm from "../product-form";

interface UpdateProductDrawerProps {
  id: ProductQueryVariables["id"];
}

export default function UpdateProductDrawer({id}: UpdateProductDrawerProps) {
  useFakeLocation(`/stock/product/${id}/update`);

  const {dispatch} = useDrawer();
  const message = useProductMessage();

  const {update} = useUpdateProduct();
  const handleSubmit = useCallback(
    async (values: ProductInput) => {
      await update(id, values);
      closeDrawer(dispatch);
      message(id);
    },
    [dispatch, id, message, update],
  );

  const {data} = useProductQuery({variables: {id}});
  if (!data?.product) {
    return null;
  }

  return <ProductForm defaultValues={data.product} onSubmit={handleSubmit} />;
}
