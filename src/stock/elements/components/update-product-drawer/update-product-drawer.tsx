import React, {useCallback} from "react";
import useFakeLocation from "../../../../library/lib/use-fake-location";
import ProductDto from "../../../domain/dto/product.dto";
import ProductEntity from "../../../domain/entities/product.entity";
import useProduct from "../../hooks/use-product";
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

  const {data} = useProduct({id});
  if (!data) {
    return null;
  }

  return <ProductForm defaultValues={data} onSubmit={handleSubmit} />;
}
