import React, {useCallback} from "react";
import useDrawer, {openDrawer} from "../../../../../library/lib/use-drawer";
import CreateOrderDrawer from "../../../components/create-order-drawer/create-order-drawer";
import useRefetchOrders from "./use-refetch-orders";

export default function useOpenCreateOrderDrawer() {
  const {dispatch} = useDrawer();
  const {refetch} = useRefetchOrders();

  return useCallback(() => {
    openDrawer(dispatch, {
      title: "Добавить Заказ",
      body: <CreateOrderDrawer onSuccess={refetch} />,
      width: "80vw",
    });
  }, [dispatch, refetch]);
}
