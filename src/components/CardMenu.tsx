import { MdAddShoppingCart } from "react-icons/md";
import { item } from "../interfaces/interface";

interface CartaProps {
  item: item;
  actionClick?: (title: string) => void;
  actionItem?: (item: item) => void;
}
const CardMenu = ({ item, actionClick, actionItem }: CartaProps) => {
  return (
    <li
      className="group cursor-pointer"
      onClick={() =>
        actionClick ? actionClick(item?.title) : actionItem && actionItem(item)
      }
    >
      <div className="relative">
        <img
          src={item?.image}
          alt=""
          className="aspect-square object-center object-cover w-full"
        />
        <div className=" w-full h-full bg-black/30 bg-opacity-50 absolute top-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-3xl">
            <MdAddShoppingCart />
          </span>
        </div>
      </div>

      <h3 className="text-[#2D3A4B] uppercase text-lg text-center group-hover:text-yellow-500">
        {item?.title}
      </h3>
      {item?.price && (
        <span className="text-center block text-red-700 font-bold ">
          S/{item?.price.toFixed(2)}
        </span>
      )}
    </li>
  );
};
export default CardMenu;
