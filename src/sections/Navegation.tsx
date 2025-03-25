import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navegation = () => {
  return (
    <nav className="bg-red-800 flex justify-between items-center border-b border-black/20 px-20">
      <Link to="/">
        <img
          src="/logo.png"
          alt="logo de polleria rikos"
          className="invert w-24"
        />
      </Link>
      <div className="flex items-center gap-2 uppercase text-sm">
        <ul className="flex text-white space-x-5">
          <li className="py-1">
            <Link to={"/"}>inicio</Link>
          </li>
          <li className="bg-yellow-500 py-1 px-2 rounded-lg font-bold">
            <Link to={"menu"}>ordenar aqui</Link>
          </li>
          <li className="py-1">
            <Link to={"promociones"}>promociones</Link>
          </li>
          <li className="py-1">
            <Link to={"about"}>Sobre nosotros</Link>
          </li>
        </ul>
        <button className=" text-white px-3 py-1 rounded-lg  text-lg">
          <FaShoppingCart />
        </button>
      </div>
    </nav>
  );
};
export default Navegation;
