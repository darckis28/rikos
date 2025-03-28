import { useContext } from "react";
import { CartContext } from "../context/cartContext";
export const useCart = () => {
  const { itemsCart, addCart, deleteItem, resetCart } = useContext(CartContext);
  const quantityCart = itemsCart.reduce((x, y) => x + y.qty, 0);
  const totalCart = itemsCart.reduce(
    (total, item) => total + item.qty * (item?.price || 0),
    0
  );
  return { itemsCart, addCart, deleteItem, quantityCart, totalCart, resetCart };
};
