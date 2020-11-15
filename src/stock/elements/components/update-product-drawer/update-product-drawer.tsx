import React, {useCallback} from "react";
import useFakeLocation from "../../../../library/lib/use-fake-location";
import {useProductQuery} from "../../../../main/lib/generated";
import ProductDto from "../../../domain/dto/product.dto";
import ProductEntity from "../../../domain/entities/product.entity";
import ProductForm from "../product-form";
import useUpdateProduct from "./use-update-product";

interface UpdateProductDrawerProps {
  id: ProductEntity["id"];
}

export default function UpdateProductDrawer({id}: UpdateProductDrawerProps) {
  useFakeLocation(`/stock/product/${id}/update`);

  const {update} = useUpdateProduct();
  const handleSubmit = useCallback(
    async (values: ProductDto) => {
      await update(id, values);
    },
    [id, update],
  );

  const {data} = useProductQuery({variables: {id}});
  if (!data?.product) {
    return null;
  }

  return <ProductForm defaultValues={data.product} onSubmit={handleSubmit} />;
}
