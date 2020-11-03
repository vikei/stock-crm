import React, {useCallback, useEffect} from "react";
import {goBackFromFakeLocation, goToFakeLocation} from "../../../library/utils/fake-history";
import {closeDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {ProductQueryVariables} from "../../../main/lib/generated";
import useProductMessage from "../../lib/show-product-message";
import CreateProductContainer from "../create-product-container";

export default function CreateProductDrawer() {
  useEffect(() => {
    goToFakeLocation("/stock/product/create");

    return () => {
      goBackFromFakeLocation();
    };
  });

  const {dispatch: drawerDispatch} = useDrawerContext();
  const message = useProductMessage();
  const handleSuccess = useCallback(
    async (id: ProductQueryVariables["id"]) => {
      closeDrawer(drawerDispatch);
      message(id);
    },
    [drawerDispatch, message],
  );

  return <CreateProductContainer onSuccess={handleSuccess} />;
}
