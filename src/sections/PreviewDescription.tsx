import BtnClose from "../components/BtnClose";
import Modal from "../components/Modal";
import { FaPlus } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";
import { usePageContext } from "../hooks/usePageContext";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
const PreviewDescription = () => {
  const [quantity, setQuantity] = useState(1);
  const { item, modalItem, setModalItem } = usePageContext();
  const { addCart } = useCart();
  const reduce = () => {
    if (quantity > 1) return setQuantity((item) => item - 1);
  };
  const increase = () => {
    if (quantity < 10) return setQuantity((item) => item + 1);
  };
  const handelClick = () => {
    addCart({ ...item, qty: quantity });
    setModalItem(false);
    setQuantity(1);
  };
  return (
    <Modal show={modalItem}>
      <div className="flex justify-end mr-4 my-4">
        <BtnClose handleShow={() => setModalItem(false)} />
      </div>
      <div className="flex flex-col lg:flex-row gap-4  px-10 ">
        <img
          className="flex-1 lg:w-1/2  aspect-square object-cover object-center"
          src={item.image}
          alt={item.title}
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="font-bold uppercase text-[#2D3A4B] text-2xl">
              {item.title}
            </h2>
            <p className="text-[#2d3a4b] my-4">{item.description}</p>
            <p className="font-bold text-3xl text-red-800 mb-5 ">
              S/{item.price?.toFixed(2)}
            </p>
          </div>
          <div>
            <div className="mb-3 flex items-center ">
              <button
                onClick={reduce}
                className="w-20 h-10 bg-[#2d3a4b] text-white flex items-center justify-center rounded-l-2xl active:scale-90 cursor-pointer "
              >
                <RiSubtractFill />
              </button>
              <span className="w-20 h-10 flex items-center justify-center border-t border-[#2d3a4b] border-b ">
                {quantity}
              </span>
              <button
                onClick={increase}
                className="w-20 h-10 bg-[#2d3a4b] text-white flex items-center justify-center rounded-r-2xl cursor-pointer active:scale-90"
              >
                <FaPlus />
              </button>
            </div>
            <button
              onClick={handelClick}
              className="bg-red-800 w-full py-2 mb-4 rounded-2xl text-white font-bold uppercase hover:contrast-200 cursor-pointer"
            >
              agregar a mi orden
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default PreviewDescription;
