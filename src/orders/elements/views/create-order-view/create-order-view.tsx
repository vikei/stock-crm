import React from "react";
import {AppContent} from "../../../../main/components/app-layout";
import useHandleCreateOrder from "../../components/create-order-drawer/use-handle-create-order";
import OrderForm from "../../components/order-form";

export default function CreateOrderView() {
  const {handleCreateOrder} = useHandleCreateOrder();

  return (
    <AppContent title="Создать Заказ">
      <OrderForm onSubmit={handleCreateOrder} />
    </AppContent>
  );
}
