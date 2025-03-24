import CardMenu from "../components/CardMenu";
import Title from "../components/Title";
import { CARTA } from "../const/Carta";
import { usePageContext } from "../hooks/usePageContext";
import { CartaType } from "../interfaces/interface";

const Carta = () => {
  const { modalCarta, activeModalCarta, setModalCarta } = usePageContext();
  const handleShowPromos = (title: string) => {
    console.log(title);
    setModalCarta(!modalCarta);
    const item = CARTA.filter((promo) => promo.title === title);
    activeModalCarta(item[0]);
  };
  return (
    <section>
      <Title>Nuestra carta web</Title>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {CARTA.map((item: CartaType, index: number) => (
          <CardMenu
            actionClick={handleShowPromos}
            item={item}
            key={index}
          />
        ))}
      </ul>
    </section>
  );
};
export default Carta;
