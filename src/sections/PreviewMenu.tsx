import CardMenu from "../components/CardMenu";
import Modal from "../components/Modal";
import Title from "../components/Title";
import { PROMOS } from "../const/promos";
import { useState } from "react";
import BtnClose from "../components/BtnClose";

const PreviewMenu = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <Modal show={show}>
      <header className="flex items-center justify-between py-4">
        <Title>Preview Menu</Title>
        <BtnClose handleShow={handleShow} />
      </header>

      <ul className="grid grid-cols-4 gap-4 pb-8 px-8  ">
        {PROMOS.map((promo) => (
          <CardMenu
            image={promo.image}
            title={promo.title}
            price={promo.price}
          />
        ))}
      </ul>
    </Modal>
  );
};
export default PreviewMenu;
