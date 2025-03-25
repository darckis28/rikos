import { cartItem } from "../interfaces/interface";

type actionCart =
  | { type: "ADD"; payload: cartItem }
  | { type: "DELETE"; payload: { id: number } };
export const cartReducer = (state: cartItem[], action: actionCart) => {
  switch (action.type) {
    case "ADD":
      if (state.findIndex((obj) => obj.id === action.payload.id) !== -1) {
        return state.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      }
      return [...state, action.payload];
    case "DELETE":
      return state.filter((itm) => itm.id !== action.payload.id);
  }
};
