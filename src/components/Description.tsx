import Title from "./Title";

type description = {
  title: string;
  description: string;
};

const Description = ({ title, description }: description) => {
  return (
    <div className="px-4 mb-10">
      <Title center> {title}</Title>
      <p className="text-center tracking-widest text-black/70 px-8">
        {description}
      </p>
    </div>
  );
};
export default Description;
