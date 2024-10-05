import { CART_ADDED } from "./actionType";


export const initialState = [];

export const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADDED:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    default:
      return state;
  }
};
