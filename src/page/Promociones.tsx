import { useEffect } from "react";
import Promos from "../sections/Promos";

const Promociones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto my-8">
      <Promos />
    </div>
  );
};
export default Promociones;
