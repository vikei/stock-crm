import React from "react";
import useDrawer, {closeDrawer} from "../../../library/lib/use-drawer";
import useFakeLocation from "../../../library/lib/use-fake-location";
import useCreateProduct from "../../lib/use-create-product";
import useProductMessage from "../../lib/use-product-message";
import ProductForm from "../product-form";

interface CreateProductDrawerProps {
  onSuccess?: () => void;
}

export default function CreateProductDrawer({onSuccess}: CreateProductDrawerProps) {
  useFakeLocation("/stock/product/create");

  const {dispatch} = useDrawer();
  const message = useProductMessage();
  /**
   * TODO: move to separate file
   * To have only one reason to change Component
   */
  const {create} = useCreateProduct({
    onSuccess: ({id}) => {
      closeDrawer(dispatch);
      message(id);
      onSuccess?.();
    },
  });

  return <ProductForm onSubmit={create} />;
}
