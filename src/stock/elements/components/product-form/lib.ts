import ProductDto from "../../../domain/dto/product.dto";

const productFormInitialValues = {available: true};

export function getDefaultProductValues(data?: ProductDto | undefined) {
  return data ?? productFormInitialValues;
}
