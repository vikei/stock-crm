import React from "react";
import {AppContent} from "../../../main/components/app-layout";
import CreateProductContainer from "../../components/create-product-container";

export default function CreateProductView() {
  return (
    <AppContent title="Создать Продукт">
      <CreateProductContainer />
    </AppContent>
  );
}
