
import { PRODUCT_ADDED } from "./actionType";
import { initialState } from "./initialState";

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ADDED:
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          ...action.payload
        },
      ];
      default:
        return state
  }
};

export default productsReducer;
