import {Typography} from "antd";
import React from "react";
import {useParams} from "react-router-dom";
import {AppContent} from "../../../../main/components/app-layout";
import useProduct from "../../hooks/use-product";

export default function ProductView() {
  const {id} = useParams<{id: string}>();

  const {data} = useProduct({id});
  if (!data) {
    return null;
  }

  return (
    <AppContent title={data.name}>
      <Typography>{data.description}</Typography>
    </AppContent>
  );
}
