import React, {useCallback, useEffect} from "react";
import {goBackFromFakeLocation, goToFakeLocation} from "../../../library/utils/fake-history";
import {closeDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {OrderQueryVariables} from "../../../main/lib/generated";
import useOrderMessage from "../../lib/show-order-message";
import CreateOrderContainer from "../create-order-container";

interface CreateOrderDrawerProps {
  onSuccess?: () => void;
}

export default function CreateOrderDrawer({onSuccess}: CreateOrderDrawerProps) {
  useEffect(() => {
    goToFakeLocation("/orders/create");

    return () => {
      goBackFromFakeLocation();
    };
  });

  const {dispatch: drawerDispatch} = useDrawerContext();
  const message = useOrderMessage();
  const handleSuccess = useCallback(
    async (id: OrderQueryVariables["id"]) => {
      closeDrawer(drawerDispatch);
      message(id);
      onSuccess?.();
    },
    [drawerDispatch, message, onSuccess],
  );

  return <CreateOrderContainer onSuccess={handleSuccess} />;
}
