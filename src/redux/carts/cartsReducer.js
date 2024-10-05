import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionType";

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
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              cartQuantity: item.cartQuantity + 1,
              quantity: item.quantity - 1,
            };
          }
          return item; 
        });
      }

      return [...state, { ...action.payload, cartQuantity: 1 }];

    case REMOVE_FROM_CART: {
      const currentItem = state.find((item) => item.id === action.payload.id);
      if (currentItem) {
        if (currentItem.cartQuantity > 1) {
          return state.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                cartQuantity: item.cartQuantity - 1,
                quantity: item.quantity + 1,
              };
            }
            return item; 
          });
        }
        
        return state.filter((item) => item.id !== action.payload.id);
      }
      return state; 
    }

    default:
      return state; 
  }
};
