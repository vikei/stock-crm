import {Typography} from "antd";
import React, {useEffect} from "react";
import {goBackFromFakeLocation, goToFakeLocation} from "../../../library/utils/fake-history";
import {OrderQueryVariables, useOrderQuery} from "../../../main/lib/generated";

interface OrderDrawerProps {
  id: OrderQueryVariables["id"];
}

export default function OrderDrawer({id}: OrderDrawerProps) {
  useEffect(() => {
    goToFakeLocation(`/orders/${id}`);

    return () => {
      goBackFromFakeLocation();
    };
  }, [id]);

  const {data} = useOrderQuery({variables: {id}});
  if (!data?.order) {
    return null;
  }

  return <Typography>{data.order.id}</Typography>;
}
