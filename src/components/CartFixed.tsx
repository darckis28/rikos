import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
const CartFixed = () => {
  const { quantityCart } = useCart();
  return (
    <Link
      to={"cart"}
      className="fixed top-50 right-0 bg-red-400 z-30  p-2 rounded-l-3xl"
    >
      <div className="flex  items-end text-white mb-2">
        <span className="text-white text-4xl">
          <MdOutlineShoppingBag />
        </span>
        <span className="font-bold ">{quantityCart}</span>
      </div>
      <p className="font-bold text-white uppercase text-xs ">mi orden</p>
    </Link>
  );
};
export default CartFixed;
