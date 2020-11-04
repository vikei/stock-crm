import React, {useCallback} from "react";
import {useHistory} from "react-router-dom";
import {AppContent} from "../../../main/components/app-layout";
import {OrderQueryVariables} from "../../../main/lib/generated";
import CreateOrderContainer from "../../components/create-order-container";

export default function CreateOrderView() {
  const history = useHistory();
  const handleSuccess = useCallback(
    (id: OrderQueryVariables["id"]) => {
      history.push(`/orders/${id}`);
    },
    [history],
  );

  return (
    <AppContent title="Создать Заказ">
      <CreateOrderContainer onSuccess={handleSuccess} />
    </AppContent>
  );
}
