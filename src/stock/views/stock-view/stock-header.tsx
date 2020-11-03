import {PlusSquareOutlined} from "@ant-design/icons";
import {Button} from "antd";
import React, {useCallback} from "react";
import {AppContentHeader} from "../../../main/components/app-layout";
import {openDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import CreateProductDrawer from "../../components/create-product-drawer";

export default function StockHeader() {
  const {dispatch: drawerDispatch} = useDrawerContext();

  const openForm = useCallback(() => {
    openDrawer(drawerDispatch, {
      title: "Добавить продукт",
      body: <CreateProductDrawer />,
      width: "80vw",
    });
  }, [drawerDispatch]);

  return (
    <AppContentHeader>
      <div>
        <Button icon={<PlusSquareOutlined />} onClick={openForm}>
          Добавить Продукт
        </Button>
      </div>
    </AppContentHeader>
  );
}
