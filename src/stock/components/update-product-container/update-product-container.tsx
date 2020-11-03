import React, {useCallback} from "react";
import {useHistory} from "react-router-dom";
import {
  ProductQueryVariables,
  useProductQuery,
  useUpdateProductsMutation,
} from "../../../main/lib/generated";
import ProductForm from "../product-form/product-from";

interface UpdateProductContainerProps {
  id: ProductQueryVariables["id"];
  onSuccess?: () => void;
}

export default function UpdateProductContainer({id, onSuccess}: UpdateProductContainerProps) {
  const history = useHistory();

  const [updateProduct] = useUpdateProductsMutation();
  const onSubmit = useCallback(
    async values => {
      try {
        const {data} = await updateProduct({variables: {input: values, id}});
        history.push(`/stock/product/${data?.updateProduct?.id}`);
        onSuccess?.();
      } catch (e) {
        console.error(e);
      }
    },
    [history, id, onSuccess, updateProduct],
  );

  const {data} = useProductQuery({variables: {id}});
  if (!data?.product) {
    return null;
  }

  return <ProductForm onSubmit={onSubmit} defaultValues={data.product} />;
}
