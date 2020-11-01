import {PlusSquareOutlined} from "@ant-design/icons";
import {Button} from "antd";
import React, {useCallback} from "react";
import {AppContentHeader} from "../../../main/components/app-layout";
import {closeDrawer, openDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {useCreateOrderMutation} from "../../../main/lib/generated";
import OrderForm from "../../components/order-form";

export default function OrdersHeader() {
  const {dispatch: drawerDispatch} = useDrawerContext();

  const [createOrder] = useCreateOrderMutation();
  const onSubmit = useCallback(
    async values => {
      try {
        await createOrder({variables: {input: values}});
        closeDrawer(drawerDispatch);
      } catch (e) {
        console.error(e);
      }
    },
    [createOrder, drawerDispatch],
  );

  const openProductForm = useCallback(() => {
    openDrawer(drawerDispatch, {
      title: "Добавить Заказ",
      body: <OrderForm onSubmit={onSubmit} />,
      width: "50vw",
    });
  }, [drawerDispatch, onSubmit]);

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
