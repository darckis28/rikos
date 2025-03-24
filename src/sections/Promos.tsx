import CardMenu from "../components/CardMenu";
import Title from "../components/Title";
import { PROMOS } from "../const/promos";
import { usePageContext } from "../hooks/usePageContext";
const Promos = () => {
  const { activeModalItem } = usePageContext();
  return (
    <section>
      <Title>PROMOCIONES WEB</Title>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {PROMOS.map((promo) => (
          <CardMenu
            actionItem={activeModalItem}
            key={promo.id}
            item={promo}
          />
        ))}
      </ul>
    </section>
  );
};
export default Promos;
