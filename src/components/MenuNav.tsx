import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { usePageContext } from "../hooks/usePageContext";

const MenuNav = () => {
  const { showNav, setShowNav } = usePageContext();
  return (
    <nav
      className={`bg-red-800 fixed h-screen z-50 w-full ${
        showNav ? "flex" : "hidden"
      } items-center justify-center`}
    >
      <button
        onClick={() => setShowNav(false)}
        className="absolute top-3 right-3 text-3xl text-white"
      >
        <AiOutlineClose />
      </button>
      <ul className="flex flex-col gap-5 text-white uppercase md:text-3xl">
        <li>
          <Link
            onClick={() => setShowNav(false)}
            to={"/"}
          >
            inicio
          </Link>
        </li>
        <li className="">
          <Link
            onClick={() => setShowNav(false)}
            to={"menu"}
            className="bg-yellow-500 py-1 px-2 rounded-lg font-bold"
          >
            ordenar aqui
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setShowNav(false)}
            to={"promociones"}
          >
            promociones
          </Link>
        </li>
        <li>
          <Link to={"about"}>Sobre nosotros</Link>
        </li>
        <li>
          <Link
            onClick={() => setShowNav(false)}
            to={"cart"}
          >
            Mi Carrito
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default MenuNav;
