import { MdAddShoppingCart } from "react-icons/md";
import { CartaType } from "../const/Carta";

const CardMenu = ({ title, image }: CartaType) => {
  return (
    <li className="group cursor-pointer">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="aspect-square object-center object-cover"
        />
        <div className=" w-full h-full bg-black/30 bg-opacity-50 absolute top-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-3xl">
            <MdAddShoppingCart />
          </span>
        </div>
      </div>

      <h3 className="text-[#2D3A4B] uppercase text-lg text-center group-hover:text-yellow-500">
        {title}
      </h3>
    </li>
  );
};
export default CardMenu;
