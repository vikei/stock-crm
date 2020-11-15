import {Button, Checkbox, Form, Input, InputNumber} from "antd";
import React, {useCallback} from "react";
import {getDefaultProductValues} from "./lib";
import ProductValues from "./product-values";

interface ProductFormProps {
  onSubmit: (values: ProductValues) => void;
  defaultValues?: ProductValues;
}

export default function ProductForm({onSubmit, defaultValues}: ProductFormProps) {
  const submit = useCallback(
    values => {
      onSubmit(values);
    },
    [onSubmit],
  );

  return (
    <Form onFinish={submit} initialValues={getDefaultProductValues(defaultValues)}>
      <Form.Item label="Название" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Описание" name="description">
        <Input />
      </Form.Item>
      <Form.Item label="Цена" name="price">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Виден на сайте" name="available" valuePropName="checked">
        <Checkbox />
      </Form.Item>
      <Form.Item label="Количество продукта на складе" name="stockCount">
        <InputNumber />
      </Form.Item>
      <Button htmlType="submit">Сохранить</Button>
    </Form>
  );
}
