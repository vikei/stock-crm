import {PlusSquareOutlined} from "@ant-design/icons";
import {Button} from "antd";
import React, {useCallback} from "react";
import {AppContentHeader} from "../../../main/components/app-layout";
import {openDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import CreateOrderDrawer from "../../components/create-order-drawer";
import {useRefetchOrdersContext} from "./orders-view.lib";

export default function OrdersHeader() {
  const {dispatch: drawerDispatch} = useDrawerContext();
  const {refetch} = useRefetchOrdersContext();
  const openProductForm = useCallback(() => {
    openDrawer(drawerDispatch, {
      title: "Добавить Заказ",
      body: <CreateOrderDrawer onSuccess={refetch} />,
      width: "80vw",
    });
  }, [drawerDispatch, refetch]);

  return (
    <AppContentHeader>
      <div>
        <Button icon={<PlusSquareOutlined />} onClick={openProductForm}>
          Добавить Заказ
        </Button>
      </div>
    </AppContentHeader>
  );
}
