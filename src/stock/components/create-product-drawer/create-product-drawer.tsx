import React, {useCallback, useEffect} from "react";
import {goBackFromFakeLocation, goToFakeLocation} from "../../../library/utils/fake-history";
import {closeDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import CreateProductContainer from "../create-product-container";

export default function CreateProductDrawer() {
  useEffect(() => {
    goToFakeLocation("/stock/product/create");

    return () => {
      goBackFromFakeLocation();
    };
  });

  const {dispatch: drawerDispatch} = useDrawerContext();
  const handleSuccess = useCallback(async () => {
    closeDrawer(drawerDispatch);
  }, [drawerDispatch]);

  return <CreateProductContainer onSuccess={handleSuccess} />;
}
