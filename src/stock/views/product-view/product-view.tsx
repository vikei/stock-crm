import {Typography} from "antd";
import React from "react";
import {useParams} from "react-router-dom";
import {AppContent} from "../../../main/components/app-layout";
import {useProductQuery} from "../../../main/lib/generated";

export default function ProductView() {
  const {id} = useParams<{id: string}>();

  const {data} = useProductQuery({variables: {id}});
  if (!data?.product) {
    return null;
  }

  return (
    <AppContent title={data.product.name}>
      <Typography>{data.product.description}</Typography>
    </AppContent>
  );
}
