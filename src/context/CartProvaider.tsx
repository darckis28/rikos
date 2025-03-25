import { CartContext } from "./cartContext";
interface CartProps {
  children: React.ReactNode;
}

const CartProvaider = ({ children }: CartProps) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
export default CartProvaider;
