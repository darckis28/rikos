import BtnClose from "../components/BtnClose";
import Modal from "../components/Modal";
import polloentero from "../assets/promos/polloentero.jpg";
import { FaPlus } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";
const PreviewDescription = () => {
  const item = {
    id: 321654,
    title: "Mega Festín Chaufa",
    description:
      "1 POLLO A LA LEÑA ENTERO + 1 PORCIONES DE PAPA FRITAS FAMILIAR + ENSALADA FAMILIAR ",
    price: 75.0,
    image: polloentero,
  };
  return (
    <Modal show={false}>
      <div className="flex justify-end">
        <BtnClose handleShow={() => {}} />
      </div>
      <div className="flex gap-4  px-10">
        <img
          className="flex-1"
          src={item.image}
          alt={item.title}
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="font-bold uppercase text-[#2D3A4B] text-2xl">
              {item.title}
            </h2>
            <p className="text-[#2d3a4b] my-4">{item.description}</p>
            <p className="font-bold text-3xl text-red-800  ">
              S/{item.price}.00
            </p>
          </div>
          <div>
            <div className="mb-3 flex items-center ">
              <button className="w-20 h-10 bg-[#2d3a4b] text-white flex items-center justify-center rounded-l-2xl active:scale-90 cursor-pointer ">
                <RiSubtractFill />
              </button>
              <span className="w-20 h-10 flex items-center justify-center border-t border-[#2d3a4b] border-b ">
                1
              </span>
              <button className="w-20 h-10 bg-[#2d3a4b] text-white flex items-center justify-center rounded-r-2xl cursor-pointer active:scale-90">
                <FaPlus />
              </button>
            </div>
            <button className="bg-red-800 w-full py-2 rounded-2xl text-white font-bold uppercase hover:contrast-200 cursor-pointer">
              agregar a mi orden
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default PreviewDescription;
