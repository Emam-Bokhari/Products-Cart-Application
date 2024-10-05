import { ADD_TO_CART, DELETE_ITEM, REMOVE_FROM_CART } from "./actionType";

const isExist = (state, action) =>
  state.some((item) => item.id === action.payload.id);

export const initialState = [];

export const cartReducer = (state = initialState, action) => {
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

    case DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload.id);
    /* 
      filter() পদ্ধতি একটি নতুন অ্যারে তৈরি করে, যা state থেকে সমস্ত আইটেম অন্তর্ভুক্ত করে যেখানে id ম্যাচ করে না action.payload.id এর সাথে। এর মানে হল যে, যেই আইটেমটির id ম্যাচ করে, সেটি নতুন অ্যারেতে অন্তর্ভুক্ত হয় না।
      */

    default:
      return state;
  }
};
