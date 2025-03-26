interface TitleProps {
  children: string;
  center?: boolean;
}

const Title = ({ children, center }: TitleProps) => {
  return (
    <h2
      className={`text-[#2D3A4B] ${
        center && "text-center"
      } lg:text-4xl text-2xl font-extrabold my-5 uppercase `}
    >
      {children}
    </h2>
  );
};
export default Title;
