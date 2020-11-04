import React, {useCallback} from "react";
import {useHistory} from "react-router-dom";
import {AppContent} from "../../../main/components/app-layout";
import {ProductQueryVariables} from "../../../main/lib/generated";
import CreateProductContainer from "../../components/create-product-container";

export default function CreateProductView() {
  const history = useHistory();
  const handleSuccess = useCallback(
    (id: ProductQueryVariables["id"]) => {
      history.push(`/stock/product/${id}`);
    },
    [history],
  );
  return (
    <AppContent title="Создать Продукт">
      <CreateProductContainer onSuccess={handleSuccess} />
    </AppContent>
  );
}
