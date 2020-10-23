import {Button, Text} from "@blueprintjs/core";
import React, {useCallback} from "react";
import styled from "styled-components";
import {closeDrawer, openDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {useCreateProductsMutation} from "../../../main/lib/generated";
import ProductForm from "../../components/product-from";

const HeaderContainer = styled.header({
  display: "flex",
  justifyContent: "space-between",
});

export default function StockHeader() {
  const {dispatch: drawerDispatch} = useDrawerContext();

  const [createProduct] = useCreateProductsMutation();
  const onSubmit = useCallback(
    async values => {
      try {
        await createProduct({variables: {input: values}});
        closeDrawer(drawerDispatch);
      } catch (e) {
        console.error(e);
      }
    },
    [createProduct, drawerDispatch],
  );

  const openProductForm = useCallback(() => {
    openDrawer(drawerDispatch, {
      title: "Добавить продукт",
      body: <ProductForm onSubmit={onSubmit} />,
    });
  }, [drawerDispatch, onSubmit]);

  return (
    <HeaderContainer>
      <div>
        <Text tagName="h2">Склад</Text>
      </div>
      <div>
        <Button icon="add" onClick={openProductForm}>
          Добавить Продукт
        </Button>
      </div>
    </HeaderContainer>
  );
}
