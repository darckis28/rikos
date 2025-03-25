import { useReducer } from "react";
import { CartContext } from "./cartContext";
import { cartReducer } from "./reducerCart";
import { cartItem } from "../interfaces/interface";
const INITIAL_CART: cartItem[] = [
  {
    image:
      "https://cuponassets.cuponatic-latam.com/backendPe/uploads/imagenes_descuentos/115383/5a33a602e9ff953d573b6a801914a6307a0a4d35.S.jpg",
    qty: 8,
    title: "broster",
    description: "dsadsadasd",
    price: 50.0,
    id: 8745199,
  },
  {
    image:
      "https://cuponassets.cuponatic-latam.com/backendPe/uploads/imagenes_descuentos/115383/5a33a602e9ff953d573b6a801914a6307a0a4d35.S.jpg",
    qty: 2,
    title: "Chaufa",
    description: "dsadsadasd",
    price: 50.0,
    id: 87459499,
  },
];

interface CartProps {
  children: React.ReactNode;
}
const CartProvider = ({ children }: CartProps) => {
  const [itemsCart, dispatch] = useReducer(cartReducer, INITIAL_CART);
  const addCart = (item: cartItem) => {
    dispatch({ type: "ADD", payload: item });
  };
  const deleteItem = (id: number) => {
    dispatch({ type: "DELETE", payload: { id } });
  };
  return (
    <CartContext.Provider value={{ itemsCart, addCart, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
