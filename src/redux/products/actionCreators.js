import { ADD_PRODUCT, ADD_PRODUCT_QUANTITY } from "./actionType";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const addProductQuantity=(product)=>{
  return{
    type:ADD_PRODUCT_QUANTITY,
    payload:product,
  }
}