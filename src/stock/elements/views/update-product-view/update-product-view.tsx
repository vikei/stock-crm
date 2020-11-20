import React, {useCallback} from "react";
import {useParams} from "react-router-dom";
import {AppContent} from "../../../../main/components/app-layout";
import ProductDto from "../../../domain/dto/product.dto";
import ProductForm from "../../components/product-form";
import useProduct from "../../hooks/use-product";
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

  const {data} = useProduct({id});

  return (
    <AppContent title={`Изменить продукт #${data?.name ?? id}`}>
      {data && <ProductForm defaultValues={data} onSubmit={handleSubmit} />}
    </AppContent>
  );
}
