import { ADD_TO_CART } from "./actionType";

const isExist = (state, action) =>
  state.some((item) => item.id === action.payload.id);

export const initialState = [];

export const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (isExist(state, action)) {
        if (action.payload.quantity <= 0) {
          return state;
        }
      }
      return state.map((item) => {
        return {
          ...item,
          cartQuantity: item.cartQuantity + 1,
          quantity: item.quantity - 1,
        };
      });
    default:
      return state;
  }
};
