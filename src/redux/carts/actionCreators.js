import { CART_ADDED } from "./actionType";


export const added = (data) => {
  return {
    type: CART_ADDED,
    payload: data,
  };
};
