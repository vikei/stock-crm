import React, {useCallback, useEffect} from "react";
import {goBackFromFakeLocation, goToFakeLocation} from "../../../library/utils/fake-history";
import {closeDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {
  ProductInput,
  ProductQueryVariables,
  useProductQuery,
  useUpdateProductsMutation,
} from "../../../main/lib/generated";
import ProductForm from "../product-form";

interface UpdateProductDrawerProps {
  id: ProductQueryVariables["id"];
}

export default function UpdateProductDrawer({id}: UpdateProductDrawerProps) {
  useEffect(() => {
    goToFakeLocation(`/stock/product/${id}/update`);

    return () => {
      goBackFromFakeLocation();
    };
  }, [id]);

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

  const {data} = useProductQuery({variables: {id}});
  if (!data?.product) {
    return null;
  }

  return <ProductForm onSubmit={handleSubmit} defaultValues={data.product} />;
}