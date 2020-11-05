import React, {useCallback} from "react";
import {useHistory, useParams} from "react-router-dom";
import {AppContent} from "../../../main/components/app-layout";
import {ProductInput, useProductQuery} from "../../../main/lib/generated";
import ProductForm from "../../components/product-form";
import useUpdateProduct from "../../lib/use-update-product";

export default function UpdateProductView() {
  const {id} = useParams<{id: string}>();
  const history = useHistory();

  const {update} = useUpdateProduct({onSuccess: ({id}) => history.push(`/stock/product/${id}`)});
  const handleSubmit = useCallback(
    async (values: ProductInput) => {
      await update(id, values);
    },
    [id, update],
  );

  const {data} = useProductQuery({variables: {id}});

  return (
    <AppContent title={`Изменить продукт #${data?.product?.name ?? id}`}>
      {data?.product && <ProductForm defaultValues={data?.product} onSubmit={handleSubmit} />}
    </AppContent>
  );
}
