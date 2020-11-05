import React, {useCallback} from "react";
import useFakeLocation from "../../../library/lib/use-fake-location";
import {closeDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {OrderQueryVariables} from "../../../main/lib/generated";
import useOrderMessage from "../../lib/use-show-order-message";
import CreateOrderContainer from "../create-order-container";

interface CreateOrderDrawerProps {
  onSuccess?: () => void;
}

export default function CreateOrderDrawer({onSuccess}: CreateOrderDrawerProps) {
  useFakeLocation("/orders/create");

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
