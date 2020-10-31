import {PlusSquareOutlined} from "@ant-design/icons";
import {ApolloQueryResult} from "@apollo/client";
import {Button} from "antd";
import React, {useCallback} from "react";
import styled from "styled-components";
import {closeDrawer, openDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {ProductsQuery, useCreateProductsMutation} from "../../../main/lib/generated";
import ProductForm from "../../components/product-from";

const HeaderContainer = styled.header({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 30,
});

interface StockHeaderProps {
  refetchProducts: () => Promise<ApolloQueryResult<ProductsQuery>>;
}

export default function StockHeader({refetchProducts}: StockHeaderProps) {
  const {dispatch: drawerDispatch} = useDrawerContext();

  const [createProduct] = useCreateProductsMutation();
  const onSubmit = useCallback(
    async values => {
      try {
        await createProduct({variables: {input: values}});
        await refetchProducts();
        closeDrawer(drawerDispatch);
      } catch (e) {
        console.error(e);
      }
    },
    [createProduct, drawerDispatch, refetchProducts],
  );

  const openProductForm = useCallback(() => {
    openDrawer(drawerDispatch, {
      title: "Добавить продукт",
      body: <ProductForm onSubmit={onSubmit} />,
      width: "50vw",
    });
  }, [drawerDispatch, onSubmit]);

  return (
    <HeaderContainer>
      <div>
        <Button icon={<PlusSquareOutlined />} onClick={openProductForm}>
          Добавить Продукт
        </Button>
      </div>
    </HeaderContainer>
  );
}
