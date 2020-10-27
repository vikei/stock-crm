import {Button, FormGroup, InputGroup, NumericInput} from "@blueprintjs/core";
import React, {useCallback} from "react";
import {Controller, useForm} from "react-hook-form";
import {Product, ProductInput} from "../../main/lib/generated";

type ProductFromValues = Omit<ProductInput, "price" | "stockCount"> & {
  price: string;
  stockCount: string;
};

function deserializeProductFormValues({
  price,
  stockCount,
  ...values
}: ProductFromValues): ProductInput {
  return {
    ...values,
    price: parseFloat(price),
    stockCount: parseInt(stockCount),
  };
}

function serializeProductFormValues({
  price,
  stockCount,
  ...values
}: ProductInput): ProductFromValues {
  return {
    ...values,
    price: price.toString(),
    stockCount: stockCount.toString(),
  };
}

const defaultProductFormValues: ProductFromValues = {
  name: "",
  description: "",
  price: "0.00",
  stockCount: "0",
};

interface ProductFormProps {
  onSubmit: (values: ProductInput) => void;
  defaultValues?: Product;
}

export default function ProductForm({onSubmit, defaultValues}: ProductFormProps) {
  const {register, handleSubmit, control} = useForm<ProductFromValues>({
    defaultValues: defaultValues
      ? serializeProductFormValues(defaultValues)
      : defaultProductFormValues,
  });

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
        {/* TODO: Fix controlled number input */}
        {/* react-hooks-form expect onChange called instead onValueChange*/}
        <Controller
          control={control}
          name="price"
          render={({onChange, value, name}) => (
            <NumericInput
              stepSize={1}
              majorStepSize={10}
              minorStepSize={0.01}
              name={name}
              value={value}
              onValueChange={(_, value) => {
                onChange(value);
              }}
              allowNumericCharactersOnly
            />
          )}
        />
      </FormGroup>
      <FormGroup label="Количество продукта на складе">
        <Controller
          control={control}
          name="stockCount"
          render={({onChange, value, name}) => (
            <NumericInput
              stepSize={1}
              name={name}
              value={value}
              onValueChange={(_, value) => {
                onChange(value);
              }}
              allowNumericCharactersOnly
            />
          )}
        />
      </FormGroup>
      <Button type="submit">{defaultValues ? "Сохранить" : "Добавить"}</Button>
    </form>
  );
}
