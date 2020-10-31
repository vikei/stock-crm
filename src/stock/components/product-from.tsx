import {Button, Form, Input, InputNumber} from "antd";
import React, {useCallback} from "react";
import {Product, ProductInput} from "../../main/lib/generated";

interface ProductFormProps {
  onSubmit: (values: ProductInput) => void;
  defaultValues?: Product;
}

export default function ProductForm({onSubmit, defaultValues}: ProductFormProps) {
  const submit = useCallback(
    values => {
      onSubmit(values);
    },
    [onSubmit],
  );

  return (
    <Form onFinish={submit} initialValues={defaultValues}>
      <Form.Item
        label="Название"
        name="name"
        rules={[{required: true, message: "Please input your username!"}]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Описание"
        name="description"
        rules={[{required: true, message: "Please input your username!"}]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Цена"
        name="price"
        rules={[{required: true, message: "Please input your username!"}]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Количество продукта на складе"
        name="stockCount"
        rules={[{required: true, message: "Please input your username!"}]}
      >
        <InputNumber />
      </Form.Item>
      <Button htmlType="submit">{defaultValues ? "Сохранить" : "Добавить"}</Button>
    </Form>
  );
}
