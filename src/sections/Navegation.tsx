import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { usePageContext } from "../hooks/usePageContext";
const Navegation = () => {
  const { quantityCart } = useCart();
  const { setShowNav } = usePageContext();
  return (
    <nav className="bg-red-800 flex justify-between items-center border-b border-black/20 px-4 lg:px-20">
      <Link to="/">
        <img
          src="/logo.png"
          alt="logo de polleria rikos"
          className="invert w-24 "
        />
      </Link>
      <div className="hidden items-center gap-2 uppercase text-sm lg:flex">
        <ul className="flex text-white space-x-5">
          <li>
            <Link
              className="py-1"
              to={"/"}
            >
              inicio
            </Link>
          </li>
          <li className="">
            <Link
              to={"menu"}
              className="bg-yellow-500 py-1 px-2 rounded-lg font-bold"
            >
              ordenar aqui
            </Link>
          </li>
          <li>
            <Link
              className="py-1"
              to={"promociones"}
            >
              promociones
            </Link>
          </li>
          <li>
            <Link
              className="py-1"
              to={"about"}
            >
              Sobre nosotros
            </Link>
          </li>
        </ul>
        <Link
          to={"cart"}
          className=" text-white px-3 py-1 rounded-lg  text-lg relative"
        >
          <span className="absolute text-sm bg-yellow-500 w-4 h-4 flex justify-center items-center rounded-full -top-1 -right-0">
            {quantityCart}
          </span>
          <FaShoppingCart />
        </Link>
      </div>
      <button
        onClick={() => setShowNav(true)}
        className="text-white text-2xl lg:hidden"
      >
        <GiHamburgerMenu />
      </button>
    </nav>
  );
};
export default Navegation;
