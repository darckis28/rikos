import CardMenu from "../components/CardMenu";
import Title from "../components/Title";
import { PROMOS } from "../const/promos";
const Promos = () => {
  return (
    <section>
      <Title>PROMOCIONES WEB</Title>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {PROMOS.map((promo) => (
          <CardMenu
            key={promo.id}
            title={promo.title}
            image={promo.image}
            price={promo.price}
          />
        ))}
      </ul>
    </section>
  );
};
export default Promos;
