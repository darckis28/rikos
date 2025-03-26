type ModalProps = {
  children: React.ReactNode;
  show: boolean;
};
const Modal = ({ children, show }: ModalProps) => {
  return (
    <div
      className={`px-4 ${
        show ? "flex" : "hidden"
      } h-dvh w-full bg-black/50 top-0 left-0  items-center justify-center fixed z-50`}
    >
      <div className="md:w-[80%]  h-[80%] md:p-2 rounded-2xl bg-white overflow-y-auto animate-wiggle scrollstyle">
        {children}
      </div>
    </div>
  );
};
export default Modal;
