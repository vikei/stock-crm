import {Typography} from "antd";
import React from "react";
import {useParams} from "react-router-dom";
import {AppContent} from "../../../../main/components/app-layout";
import useOrder from "../../hooks/use-order";

export default function OrderView() {
  const {id} = useParams<{id: string}>();
  const {data} = useOrder({id});

  if (!data) {
    return null;
  }

  return (
    <AppContent title={data.id}>
      <Typography>{data.id}</Typography>
    </AppContent>
  );
}
