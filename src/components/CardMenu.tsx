import { MdAddShoppingCart } from "react-icons/md";
interface CardMenuProps {
  title: string;
}

const CardMenu = () => {
  return (
    <li className="group cursor-pointer">
      <div className="relative">
        <img
          src="https://myplate-prod.azureedge.us/sites/default/files/styles/recipe_525_x_350_/public/2021-09/HarvestVegetableSalad_527x323.jpg?itok=RFe6ZyZt"
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
        Ensaladas
      </h3>
    </li>
  );
};
export default CardMenu;
