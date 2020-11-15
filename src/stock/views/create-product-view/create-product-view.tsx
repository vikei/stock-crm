import React from "react";
import {useHistory} from "react-router-dom";
import {AppContent} from "../../../main/components/app-layout";
import ProductForm from "../../components/product-form";
import useCreateProduct from "../../lib/use-create-product";

export default function CreateProductView() {
  const history = useHistory();

  /**
   * TODO: move to separate file
   * To have only one reason to change Component
   */
  const {create} = useCreateProduct({
    onSuccess: ({id}) => history.push(`/stock/product/${id}`),
  });

  return (
    <AppContent title="Создать Продукт">
      <ProductForm onSubmit={create} />
    </AppContent>
  );
}
