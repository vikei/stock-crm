import React from "react";
import useFakeLocation from "../../../../library/lib/use-fake-location";
import useCreateProduct from "./use-create-product";
import ProductForm from "../product-form";

interface CreateProductDrawerProps {
  onSuccess?: () => void;
}

export default function CreateProductDrawer({onSuccess}: CreateProductDrawerProps) {
  useFakeLocation("/stock/product/create");

  const {create} = useCreateProduct({onSuccess});

  return <ProductForm onSubmit={create} />;
}
