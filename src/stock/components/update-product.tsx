import React, {useCallback} from "react";
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
