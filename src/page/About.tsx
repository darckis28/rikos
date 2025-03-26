import { useEffect } from "react";
import Description from "../components/Description";
import Map from "../components/Map";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Description
        title="Visión "
        description="Ser la MEJOR cadena de restaurantes de Pollos a la Brasa enfocada en la familia, transmitiendo nuestra PASIÓN en cada experiencia."
      />
      <Description
        title="Misión "
        description="Brindar EXPERIENCIAS Y MOMENTOS INOLVIDABLES a todos nuestros clientes."
      />
      <Description
        title="Valores "
        description="INCLUSIÓN, RESPETO, SOLIDARIDAD, HONESTIDAD, PASIÓN"
      />

      <Map />
    </section>
  );
};
export default About;
