import React from "react";
import {useParams} from "react-router-dom";
import {AppContent} from "../../../main/components/app-layout";
import UpdateOrderContainer from "../../components/update-order-container";

export default function UpdateOrderView() {
  const {id} = useParams<{id: string}>();
  return (
    <AppContent title={`Изменить продукт #${id}`}>
      <UpdateOrderContainer id={id} />
    </AppContent>
  );
}
