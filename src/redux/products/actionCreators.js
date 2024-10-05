import { PRODUCT_ADDED } from "./actionType";


export const added = (data) => {
  return {
    type: PRODUCT_ADDED,
    payload: data,
  };
};
