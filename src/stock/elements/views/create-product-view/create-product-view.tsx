import React from "react";
import {AppContent} from "../../../../main/components/app-layout";
import ProductForm from "../../components/product-form";
import useCreateProduct from "./use-create-product";

export default function CreateProductView() {
  const {create} = useCreateProduct();

  return (
    <AppContent title="Создать Продукт">
      <ProductForm onSubmit={create} />
    </AppContent>
  );
}
