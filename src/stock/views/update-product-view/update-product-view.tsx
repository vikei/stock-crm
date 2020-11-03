import React from "react";
import {useParams} from "react-router-dom";
import {AppContent} from "../../../main/components/app-layout";
import UpdateProductContainer from "../../components/update-product-container";

export default function UpdateProductView() {
  const {id} = useParams<{id: string}>();
  return (
    <AppContent title={`Изменить продукт #${id}`}>
      <UpdateProductContainer id={id} />
    </AppContent>
  );
}
