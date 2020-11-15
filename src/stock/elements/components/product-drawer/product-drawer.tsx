import {Typography} from "antd";
import React from "react";
import useFakeLocation from "../../../../library/lib/use-fake-location";
import {useProductQuery} from "../../../../main/lib/generated";
import ProductEntity from "../../../domain/entities/product.entity";

interface ProductDrawerProps {
  id: ProductEntity["id"];
}

export default function ProductDrawer({id}: ProductDrawerProps) {
  useFakeLocation(`/stock/product/${id}`);

  const {data} = useProductQuery({variables: {id}});
  if (!data?.product) {
    return null;
  }

  return <Typography>{data.product.description}</Typography>;
}
