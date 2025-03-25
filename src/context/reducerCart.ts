import { item } from "../interfaces/interface";

type actionCart = { type: "ADD"; payload: item };
export const cartReducer = (state: item[], action: actionCart) => {
  switch (action.type) {
    case "ADD":
      return state;
  }
};
