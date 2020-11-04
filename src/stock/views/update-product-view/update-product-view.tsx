import React, {useCallback} from "react";
import {useHistory, useParams} from "react-router-dom";
import {AppContent} from "../../../main/components/app-layout";
import {ProductQueryVariables} from "../../../main/lib/generated";
import UpdateProductContainer from "../../components/update-product-container";

export default function UpdateProductView() {
  const {id} = useParams<{id: string}>();

  const history = useHistory();
  const handleSuccess = useCallback(
    (id: ProductQueryVariables["id"]) => {
      history.push(`/stock/product/${id}`);
    },
    [history],
  );
  return (
    <AppContent title={`Изменить продукт #${id}`}>
      <UpdateProductContainer id={id} onSuccess={handleSuccess} />
    </AppContent>
  );
}
