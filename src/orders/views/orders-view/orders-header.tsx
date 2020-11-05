import {PlusSquareOutlined} from "@ant-design/icons";
import {Button} from "antd";
import React, {useCallback} from "react";
import {AppContentHeader} from "../../../main/components/app-layout";
import {openDrawer, useDrawer} from "../../../main/lib/drawer-context";
import CreateOrderDrawer from "../../components/create-order-drawer";
import {useRefetchOrders} from "./orders-view.lib";

export default function OrdersHeader() {
  const {dispatch: drawerDispatch} = useDrawer();
  const {refetch} = useRefetchOrders();
  const openForm = useCallback(() => {
    openDrawer(drawerDispatch, {
      title: "Добавить Заказ",
      body: <CreateOrderDrawer onSuccess={refetch} />,
      width: "80vw",
    });
  }, [drawerDispatch, refetch]);

  return (
    <AppContentHeader>
      <div>
        <Button icon={<PlusSquareOutlined />} onClick={openForm}>
          Добавить Заказ
        </Button>
      </div>
    </AppContentHeader>
  );
}
