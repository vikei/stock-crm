import {Product} from "../../../main/lib/generated";

const productFormInitialValues = {available: true};
export function getDefaultProductValues(data?: Product | undefined) {
  return data ?? productFormInitialValues;
}
