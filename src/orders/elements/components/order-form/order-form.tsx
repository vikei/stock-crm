import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {Button, Form, InputNumber, Select, Space} from "antd";
import React from "react";
import {DeliveryStatus} from "../../../../main/lib/generated";
import ProductSelect from "../product-select";
import {deserializeOrderForm, getDefaultOrderValues} from "./lib";
import OrderValues from "./order-values";

interface OrderFormProps {
  onSubmit: (values: OrderValues) => void;
  defaultValues?: OrderValues;
}

export default function OrderForm({onSubmit, defaultValues}: OrderFormProps) {
  return (
    <Form
      onFinish={data => onSubmit(deserializeOrderForm(data))}
      initialValues={getDefaultOrderValues(defaultValues)}
    >
      <Form.Item label="Статус" name="deliveryStatus">
        <Select>
          {Object.values(DeliveryStatus).map(status => (
            <Select.Option key={status} value={status}>
              {status}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.List name="cart">
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
        <Button htmlType="submit">Сохранить</Button>
      </Form.Item>
    </Form>
  );
}
