import React, {useCallback, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {goBackFromFakeLocation, goToFakeLocation} from "../../library/utils/fake-history";
import {closeDrawer, useDrawerContext} from "../../main/lib/drawer-context";
import {
  ProductInput,
  UpdateProductsMutationVariables,
  useProductQuery,
  useUpdateProductsMutation,
} from "../../main/lib/generated";
import ProductForm from "./product-from";

interface UpdateProductProps {
  id: UpdateProductsMutationVariables["id"];
}

export default function UpdateProduct({id}: UpdateProductProps) {
  useEffect(() => {
    goToFakeLocation(`/stock/product/${id}/update`);

    return () => {
      goBackFromFakeLocation();
    };
  }, [id]);

  const {data} = useProductQuery({variables: {id}});

  const [updateProduct] = useUpdateProductsMutation({
    onCompleted: () => {
      closeDrawer(dispatch);
    },
  });
  const {dispatch} = useDrawerContext();
  const handleSubmit = useCallback(
    async (values: ProductInput) => {
      try {
        await updateProduct({variables: {input: values, id}});
      } catch (e) {
        console.error(e);
      }
    },
    [id, updateProduct],
  );

  if (!data?.product) {
    return null;
  }

  return <ProductForm onSubmit={handleSubmit} defaultValues={data.product} />;
}
