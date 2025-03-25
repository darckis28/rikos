type ModalProps = {
  children: React.ReactNode;
  show: boolean;
  onclick?: () => void;
};
const Modal = ({ children, show, onclick }: ModalProps) => {
  return (
    <div
      onClick={onclick && onclick}
      className={` ${
        show ? "flex" : "hidden"
      } h-dvh w-full bg-black/50 top-0 left-0  items-center justify-center fixed z-50`}
    >
      <div className="w-[80%] h-[80%] p-2 rounded-2xl bg-white overflow-y-auto animate-wiggle scrollstyle">
        {children}
      </div>
    </div>
  );
};
export default Modal;
