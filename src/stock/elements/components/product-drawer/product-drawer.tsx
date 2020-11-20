import {Typography} from "antd";
import React from "react";
import useFakeLocation from "../../../../library/lib/use-fake-location";
import ProductEntity from "../../../domain/entities/product.entity";
import useProduct from "../../hooks/use-product";

interface ProductDrawerProps {
  id: ProductEntity["id"];
}

export default function ProductDrawer({id}: ProductDrawerProps) {
  useFakeLocation(`/stock/product/${id}`);

  const {data} = useProduct({id});
  if (!data) {
    return null;
  }

  return <Typography>{data.description}</Typography>;
}
