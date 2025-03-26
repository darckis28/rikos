import { useState } from "react";
import promoModal from "../assets/promomodal.jpg";
const Promo = () => {
  const [show, setShow] = useState(true);
  return (
    <div
      className={`px-4 ${
        show ? "flex" : "hidden"
      } h-dvh w-full bg-black/50 top-0 left-0  items-center justify-center fixed z-50`}
    >
      <div className="max-w-xl relative">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 bg-black rounded-full text-white w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          X
        </button>
        <img
          src={promoModal}
          alt="promocion de pollo"
        />
      </div>
    </div>
  );
};
export default Promo;
