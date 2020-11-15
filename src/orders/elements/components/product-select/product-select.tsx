import {Select} from "antd";
import React, {useEffect} from "react";
import {useProductsLazyQuery} from "../../../../main/lib/generated";

// TODO: change to use props from Form.Item
export default function ProductSelect(props: any) {
  const [getProducts, {data}] = useProductsLazyQuery();

  const options = data?.products.map(product => (
    <Select.Option key={product.id} value={parseInt(product.id)}>
      {product.name}
    </Select.Option>
  ));

  useEffect(() => {
    if (props.value) {
      getProducts({variables: {ids: [props.value]}});
    }
  }, [getProducts, props.value]);

  return (
    <Select
      {...props}
      showSearch
      defaultActiveFirstOption={false}
      style={{width: "100%"}}
      filterOption={false}
      onSearch={value => {
        getProducts({variables: {name: value}});
      }}
    >
      {options}
    </Select>
  );
}
