import React, {useCallback} from "react";
import {useHistory} from "react-router-dom";
import {ProductQueryVariables, useCreateProductsMutation} from "../../../main/lib/generated";
import ProductForm from "../product-form/product-from";

interface CreateProductContainerProps {
  onSuccess?: (id: ProductQueryVariables["id"]) => void;
}

export default function CreateProductContainer({onSuccess}: CreateProductContainerProps) {
  const history = useHistory();
  const [createProduct] = useCreateProductsMutation();
  const onSubmit = useCallback(
    async values => {
      try {
        const {data} = await createProduct({variables: {input: values}});
        const id = data?.createProduct?.id;

        if (!id) {
          return;
        }

        if (onSuccess) {
          onSuccess(id);
        } else {
          history.push(`/stock/product/${id}`);
        }
      } catch (e) {
        console.error(e);
      }
    },
    [createProduct, history, onSuccess],
  );

  return <ProductForm onSubmit={onSubmit} />;
}
