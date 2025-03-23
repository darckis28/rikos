import { IoCloseSharp } from "react-icons/io5";

type Props = {
  handleShow: () => void;
};

const BtnClose = ({ handleShow }: Props) => {
  return (
    <button
      onClick={handleShow}
      className="rounded-full bg-[#2D3A4B] p-2 text-white w-10 h-10 flex items-center justify-center hover:scale-110 cursor-pointer transition-transform duration-300"
    >
      <IoCloseSharp />
    </button>
  );
};
export default BtnClose;
