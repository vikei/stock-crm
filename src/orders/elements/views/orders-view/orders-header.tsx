import {PlusSquareOutlined} from "@ant-design/icons";
import {Button} from "antd";
import React from "react";
import {AppContentHeader} from "../../../../main/components/app-layout";
import useOpenCreateOrderDrawer from "./lib/use-open-create-order-drawer";

export default function OrdersHeader() {
  const open = useOpenCreateOrderDrawer();

  return (
    <AppContentHeader>
      <div>
        <Button icon={<PlusSquareOutlined />} onClick={open}>
          Добавить Заказ
        </Button>
      </div>
    </AppContentHeader>
  );
}
