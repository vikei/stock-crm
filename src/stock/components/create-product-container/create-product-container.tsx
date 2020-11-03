import React, {useCallback} from "react";
import {useHistory} from "react-router-dom";
import {useCreateProductsMutation} from "../../../main/lib/generated";
import ProductForm from "../product-form/product-from";

interface CreateProductContainerProps {
  onSuccess?: () => void;
}

export default function CreateProductContainer({onSuccess}: CreateProductContainerProps) {
  const history = useHistory();
  const [createProduct] = useCreateProductsMutation();
  const onSubmit = useCallback(
    async values => {
      try {
        const {data} = await createProduct({variables: {input: values}});
        history.push(`/stock/product/${data?.createProduct?.id}`);
        onSuccess?.();
      } catch (e) {
        console.error(e);
      }
    },
    [createProduct, history, onSuccess],
  );

  return <ProductForm onSubmit={onSubmit} />;
}
