import {Typography} from "antd";
import React from "react";
import useFakeLocation from "../../../library/lib/use-fake-location";
import {ProductQueryVariables, useProductQuery} from "../../../main/lib/generated";

interface ProductDrawerProps {
  id: ProductQueryVariables["id"];
}

export default function ProductDrawer({id}: ProductDrawerProps) {
  useFakeLocation(`/stock/product/${id}`);

  const {data} = useProductQuery({variables: {id}});
  if (!data?.product) {
    return null;
  }

  return <Typography>{data.product.description}</Typography>;
}
