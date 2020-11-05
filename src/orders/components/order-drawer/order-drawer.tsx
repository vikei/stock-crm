import {Typography} from "antd";
import React from "react";
import useFakeLocation from "../../../library/lib/use-fake-location";
import {OrderQueryVariables, useOrderQuery} from "../../../main/lib/generated";

interface OrderDrawerProps {
  id: OrderQueryVariables["id"];
}

export default function OrderDrawer({id}: OrderDrawerProps) {
  useFakeLocation(`/orders/${id}`);

  const {data} = useOrderQuery({variables: {id}});
  if (!data?.order) {
    return null;
  }

  return <Typography>{data.order.id}</Typography>;
}
