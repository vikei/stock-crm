import React from "react";
import useFakeLocation from "../../../../library/lib/use-fake-location";
import useHandleCreateProduct from "./use-handle-create-product";
import ProductForm from "../product-form";

interface CreateProductDrawerProps {
  onSuccess?: () => void;
}

export default function CreateProductDrawer({onSuccess}: CreateProductDrawerProps) {
  useFakeLocation("/stock/product/create");

  const {handleCreateProduct} = useHandleCreateProduct({onSuccess});

  return <ProductForm onSubmit={handleCreateProduct} />;
}
