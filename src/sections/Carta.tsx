import CardMenu from "../components/CardMenu";
import Title from "../components/Title";

const Carta = () => {
  return (
    <section>
      <Title>Nuestra carta web</Title>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
      </ul>
    </section>
  );
};
export default Carta;
