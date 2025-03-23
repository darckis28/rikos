import { MdAddShoppingCart } from "react-icons/md";

interface CartaType {
  title: string;
  image: string;
  price?: number;
}
const CardMenu = ({ title, image, price }: CartaType) => {
  return (
    <li className="group cursor-pointer">
      <div className="relative">
        <img
          src={image}
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
        {title}
      </h3>
      {price && (
        <span className="text-center block text-red-700 font-bold ">
          S/{price}.00
        </span>
      )}
    </li>
  );
};
export default CardMenu;
