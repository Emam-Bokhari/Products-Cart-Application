import { ADDED } from "./actionType";
import { initialState } from "./initialState";

export const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
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
