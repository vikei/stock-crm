import {Typography} from "antd";
import React from "react";
import {useParams} from "react-router-dom";
import {AppContent} from "../../../main/components/app-layout";
import {useOrderQuery} from "../../../main/lib/generated";

export default function OrderView() {
  const {id} = useParams<{id: string}>();
  const {data} = useOrderQuery({variables: {id}});

  if (!data?.order) {
    return null;
  }

  return (
    <AppContent title={data.order.id}>
      <Typography>{data.order.id}</Typography>
    </AppContent>
  );
}
