import React, {useCallback} from "react";
import useFakeLocation from "../../../../library/lib/use-fake-location";
import {useProductQuery} from "../../../../main/lib/generated";
import ProductDto from "../../../domain/dto/product.dto";
import ProductEntity from "../../../domain/entities/product.entity";
import ProductForm from "../product-form";
import useHandleUpdateProduct from "./use-handle-update-product";

interface UpdateProductDrawerProps {
  id: ProductEntity["id"];
}

export default function UpdateProductDrawer({id}: UpdateProductDrawerProps) {
  useFakeLocation(`/stock/product/${id}/update`);

  const {handleUpdateProduct} = useHandleUpdateProduct();
  const handleSubmit = useCallback(
    async (values: ProductDto) => {
      await handleUpdateProduct(id, values);
    },
    [handleUpdateProduct, id],
  );

  const {data} = useProductQuery({variables: {id}});
  if (!data?.product) {
    return null;
  }

  return <ProductForm defaultValues={data.product} onSubmit={handleSubmit} />;
}
