import React from "react";
import {AppContent} from "../../../main/components/app-layout";
import CreateOrderContainer from "../../components/create-order-container";

export default function CreateOrderView() {
  return (
    <AppContent title="Создать Заказ">
      <CreateOrderContainer />
    </AppContent>
  );
}
