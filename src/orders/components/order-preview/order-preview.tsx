import {Typography} from "antd";
import React, {useEffect} from "react";
import {goBackFromFakeLocation, goToFakeLocation} from "../../../library/utils/fake-history";
import {OrderQueryVariables, useOrderQuery} from "../../../main/lib/generated";

interface OrderPreviewProps {
  id: OrderQueryVariables["id"];
}

export default function OrderPreview({id}: OrderPreviewProps) {
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

  return (
    <>
      <Typography>
        {data?.order?.products.map(product => (
          <Typography key={product.id}>{product.name}</Typography>
        ))}
      </Typography>
    </>
  );
}
