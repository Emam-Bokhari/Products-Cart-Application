import { ADDED } from "./actionType";

export const added = (data) => {
  return {
    type: ADDED,
    payload: data,
  };
};
