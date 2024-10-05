import { ADD_PRODUCT } from "./actionType";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
