import {PlusSquareOutlined} from "@ant-design/icons";
import {Button} from "antd";
import React, {useCallback} from "react";
import {AppContentHeader} from "../../../main/components/app-layout";
import {openDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import CreateProductDrawer from "../../components/create-product-drawer";
import {useRefetchProducts} from "./stock-view.lib";

export default function StockHeader() {
  const {dispatch: drawerDispatch} = useDrawerContext();
  const {refetch} = useRefetchProducts();
  const openForm = useCallback(() => {
    openDrawer(drawerDispatch, {
      title: "Добавить продукт",
      body: <CreateProductDrawer onSuccess={refetch} />,
      width: "80vw",
    });
  }, [drawerDispatch, refetch]);

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
