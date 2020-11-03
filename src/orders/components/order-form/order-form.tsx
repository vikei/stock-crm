import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {Button, Form, InputNumber, Space} from "antd";
import React from "react";
import {Order, OrderInput} from "../../../main/lib/generated";
import ProductSelect from "../product-select";

interface OrderFormProps {
  onSubmit: (values: OrderInput) => Promise<void>;
  defaultValues?: Order;
}

export default function OrderForm({onSubmit, defaultValues}: OrderFormProps) {
  return (
    <Form
      onFinish={onSubmit}
      initialValues={
        defaultValues
          ? {
              ...defaultValues,
              inventory: defaultValues.inventory.map(inventoryItem => ({
                productId: inventoryItem.productId,
                count: inventoryItem.count,
              })),
            }
          : undefined
      }
    >
      <Form.List name="inventory">
        {(fields, {add, remove}) => (
          <>
            {fields.map(field => (
              <Space key={field.key} style={{display: "flex", marginBottom: 8}} align="baseline">
                <Form.Item
                  style={{width: 300}}
                  {...field}
                  name={[field.name, "productId"]}
                  fieldKey={[field.fieldKey, "productId"]}
                  normalize={value => (value ? parseInt(value) : null)}
                >
                  <ProductSelect />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, "count"]}
                  fieldKey={[field.fieldKey, "count"]}
                >
                  <InputNumber placeholder="10" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
}
