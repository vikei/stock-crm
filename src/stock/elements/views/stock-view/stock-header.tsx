import {PlusSquareOutlined} from "@ant-design/icons";
import {Button} from "antd";
import React from "react";
import {AppContentHeader} from "../../../../main/components/app-layout";
import useOpenCreateProductDrawer from "./lib/use-open-create-product-drawer";

export default function StockHeader() {
  const open = useOpenCreateProductDrawer();

  return (
    <AppContentHeader>
      <div>
        <Button icon={<PlusSquareOutlined />} onClick={open}>
          Добавить Продукт
        </Button>
      </div>
    </AppContentHeader>
  );
}
