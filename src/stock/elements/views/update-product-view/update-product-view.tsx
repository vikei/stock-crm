import React, {useCallback} from "react";
import {useParams} from "react-router-dom";
import {AppContent} from "../../../../main/components/app-layout";
import {useProductQuery} from "../../../../main/lib/generated";
import ProductDto from "../../../domain/dto/product.dto";
import ProductForm from "../../components/product-form";
import useUpdateProduct from "./use-update-product";

export default function UpdateProductView() {
  const {id} = useParams<{id: string}>();

  const {update} = useUpdateProduct();
  const handleSubmit = useCallback(
    async (values: ProductDto) => {
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
