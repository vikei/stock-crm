import {Button, FormGroup, InputGroup, NumericInput} from "@blueprintjs/core";
import React, {useCallback} from "react";
import {useForm} from "react-hook-form";
import {ProductInput} from "../../main/lib/generated";

type ProductFromValues = Omit<ProductInput, "price"> & {
  price: string;
};

function deserializeProductFormValues({price, ...values}: ProductFromValues): ProductInput {
  return {
    ...values,
    price: parseFloat(price),
  };
}

export default function ProductForm({onSubmit}: {onSubmit: (values: ProductInput) => void}) {
  const {register, handleSubmit} = useForm<ProductFromValues>();

  const submit = useCallback(
    (values: ProductFromValues) => {
      onSubmit(deserializeProductFormValues(values));
    },
    [onSubmit],
  );

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormGroup label="Название">
        <InputGroup name="name" inputRef={register} />
      </FormGroup>
      <FormGroup label="Описание">
        <InputGroup name="description" inputRef={register} />
      </FormGroup>
      <FormGroup label="Цена">
        <NumericInput name="price" inputRef={register} />
      </FormGroup>
      <Button type="submit">Добавить</Button>
    </form>
  );
}
