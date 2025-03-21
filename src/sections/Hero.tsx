import { useState } from "react";
import { PROMO } from "../const/promos";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
const Hero = () => {
  const [img, setImg] = useState<number>(0);
  const next = () => {
    if (img < PROMO.length - 1) {
      setImg(img + 1);
    } else {
      setImg(0);
    }
  };
  const back = () => {
    if (img > 0) {
      setImg(img - 1);
    } else {
      setImg(PROMO.length - 1);
    }
  };
  return (
    <div className="relative h-[400px] lg:h-[500px]">
      <button
        onClick={next}
        className="absolute text-white text-7xl  right-0 top-1/2 -translate-y-1/2 cursor-pointer p-2 bg-black/30 hover:bg-white hover:text-black transition-all "
      >
        <MdOutlineNavigateNext />
      </button>
      <button
        onClick={back}
        className="absolute text-white text-7xl left-0 top-1/2 -translate-y-1/ cursor-pointer p-2 bg-black/30 hover:bg-white hover:text-black transition-all"
      >
        <MdOutlineNavigateBefore />
      </button>

      <img
        src={PROMO[img]}
        alt="promocion de polleria rikos"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
export default Hero;
