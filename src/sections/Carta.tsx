import CardMenu from "../components/CardMenu";
import Title from "../components/Title";
import { CARTA, CartaType } from "../const/Carta";

const Carta = () => {
  return (
    <section>
      <Title>Nuestra carta web</Title>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {CARTA.map((item: CartaType, index: number) => (
          <CardMenu
            image={item.image}
            title={item.title}
            key={index}
          />
        ))}
      </ul>
    </section>
  );
};
export default Carta;
