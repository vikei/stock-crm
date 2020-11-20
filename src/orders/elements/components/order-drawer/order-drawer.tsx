import {Typography} from "antd";
import React from "react";
import useFakeLocation from "../../../../library/lib/use-fake-location";
import {OrderQueryVariables} from "../../../../main/lib/generated";
import useOrder from "../../hooks/use-order";

interface OrderDrawerProps {
  id: OrderQueryVariables["id"];
}

export default function OrderDrawer({id}: OrderDrawerProps) {
  useFakeLocation(`/orders/${id}`);

  const {data} = useOrder({id});
  if (!data) {
    return null;
  }

  return <Typography>{data.id}</Typography>;
}
