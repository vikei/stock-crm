import React, {useCallback} from "react";
import {
  ProductQueryVariables,
  useProductQuery,
  useUpdateProductMutation,
} from "../../../main/lib/generated";
import ProductForm from "../product-form/product-form";

interface UpdateProductContainerProps {
  id: ProductQueryVariables["id"];
  onSuccess?: (id: ProductQueryVariables["id"]) => void;
}

export default function UpdateProductContainer({id, onSuccess}: UpdateProductContainerProps) {
  const [updateMutation] = useUpdateProductMutation();
  const onSubmit = useCallback(
    async values => {
      try {
        const {data} = await updateMutation({variables: {input: values, id}});
        const updatedId = data?.updateProduct?.id;
        if (updatedId) {
          onSuccess?.(updatedId);
        }
      } catch (e) {
        console.error(e);
      }
    },
    [id, onSuccess, updateMutation],
  );

  const {data} = useProductQuery({variables: {id}});
  if (!data?.product) {
    return null;
  }

  return <ProductForm onSubmit={onSubmit} defaultValues={data.product} />;
}
