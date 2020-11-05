import React, {useCallback} from "react";
import useFakeLocation from "../../../library/lib/use-fake-location";
import {closeDrawer, useDrawer} from "../../../main/lib/drawer-context";
import {ProductQueryVariables} from "../../../main/lib/generated";
import useProductMessage from "../../lib/use-show-product-message";
import CreateProductContainer from "../create-product-container";

interface CreateProductDrawerProps {
  onSuccess?: () => void;
}

export default function CreateProductDrawer({onSuccess}: CreateProductDrawerProps) {
  useFakeLocation("/stock/product/create");

  const {dispatch: drawerDispatch} = useDrawer();
  const message = useProductMessage();
  const handleSuccess = useCallback(
    async (id: ProductQueryVariables["id"]) => {
      closeDrawer(drawerDispatch);
      message(id);
      onSuccess?.();
    },
    [drawerDispatch, message, onSuccess],
  );

  return <CreateProductContainer onSuccess={handleSuccess} />;
}
