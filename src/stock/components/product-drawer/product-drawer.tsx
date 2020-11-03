import {Typography} from "antd";
import React, {useEffect} from "react";
import {goBackFromFakeLocation, goToFakeLocation} from "../../../library/utils/fake-history";
import {ProductQueryVariables, useProductQuery} from "../../../main/lib/generated";

interface ProductDrawerProps {
  id: ProductQueryVariables["id"];
}

export default function ProductDrawer({id}: ProductDrawerProps) {
  useEffect(() => {
    goToFakeLocation(`/stock/product/${id}`);

    return () => {
      goBackFromFakeLocation();
    };
  }, [id]);

  const {data} = useProductQuery({variables: {id}});
  if (!data?.product) {
    return null;
  }

  return <Typography>{data.product.description}</Typography>;
}