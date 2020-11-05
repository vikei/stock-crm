import React, {useCallback} from "react";
import {ProductQueryVariables, useCreateProductMutation} from "../../../main/lib/generated";
import ProductForm from "../product-form/product-form";

interface CreateProductContainerProps {
  onSuccess?: (id: ProductQueryVariables["id"]) => void;
}

export default function CreateProductContainer({onSuccess}: CreateProductContainerProps) {
  const [createMutation] = useCreateProductMutation();
  const onSubmit = useCallback(
    async values => {
      try {
        const {data} = await createMutation({variables: {input: values}});
        const id = data?.createProduct?.id;
        if (id) {
          onSuccess?.(id);
        }
      } catch (e) {
        console.error(e);
      }
    },
    [createMutation, onSuccess],
  );

  return <ProductForm onSubmit={onSubmit} />;
}
