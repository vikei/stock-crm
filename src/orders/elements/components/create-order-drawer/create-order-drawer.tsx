import React from "react";
import useFakeLocation from "../../../../library/lib/use-fake-location";
import OrderForm from "../order-form";
import useHandleCreateOrder from "./use-handle-create-order";

interface CreateOrderDrawerProps {
  onSuccess?: () => void;
}

export default function CreateOrderDrawer({onSuccess}: CreateOrderDrawerProps) {
  useFakeLocation("/orders/create");

  const {handleCreateOrder} = useHandleCreateOrder({onSuccess});

  return <OrderForm onSubmit={handleCreateOrder} />;
}
