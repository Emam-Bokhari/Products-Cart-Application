import {
  ADD_PRODUCT,
  ADD_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_QUANTITY,
} from "./actionType";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          ...action.payload,
        },
      ];
    case ADD_PRODUCT_QUANTITY:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
      });
    case REMOVE_PRODUCT_QUANTITY:
      return state.map((item) => {
        if (action.payload.quantity <= 0) {
          return state;
        }
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
      });
    default:
      return state;
  }
};

export default productReducer;
