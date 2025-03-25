import { createContext } from "react";
import { cartItem } from "../interfaces/interface";

interface PropsCart {
  itemsCart: cartItem[];
  addCart: (item: cartItem) => void;
  deleteItem: (id: number) => void;
}
export const CartContext = createContext({} as PropsCart);
