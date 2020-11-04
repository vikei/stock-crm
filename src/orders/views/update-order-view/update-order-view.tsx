import React, {useCallback} from "react";
import {useHistory, useParams} from "react-router-dom";
import {AppContent} from "../../../main/components/app-layout";
import {OrderQueryVariables} from "../../../main/lib/generated";
import UpdateOrderContainer from "../../components/update-order-container";

export default function UpdateOrderView() {
  const {id} = useParams<{id: string}>();

  const history = useHistory();
  const handleSuccess = useCallback(
    (id: OrderQueryVariables["id"]) => {
      history.push(`/orders/${id}`);
    },
    [history],
  );

  return (
    <AppContent title={`Изменить продукт #${id}`}>
      <UpdateOrderContainer id={id} onSuccess={handleSuccess} />
    </AppContent>
  );
}
