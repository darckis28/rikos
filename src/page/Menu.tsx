import { useEffect } from "react";
import Carta from "../sections/Carta";

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mx-auto container my-8">
      <Carta />
    </div>
  );
};
export default Menu;
