import {Text} from "@blueprintjs/core";
import React, {useEffect} from "react";
import {goBackFromFakeLocation, goToFakeLocation} from "../../library/utils/fake-history";
import {UpdateProductsMutationVariables, useProductQuery} from "../../main/lib/generated";

interface ProductPreviewProps {
  id: UpdateProductsMutationVariables["id"];
}

export default function ProductPreview({id}: ProductPreviewProps) {
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

  return (
    <>
      <Text>{data.product.description}</Text>
    </>
  );
}
