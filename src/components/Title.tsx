interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h2 className="text-[#2D3A4B] text-center lg:text-4xl font-extrabold my-5 uppercase ">
      {children}
    </h2>
  );
};
export default Title;
